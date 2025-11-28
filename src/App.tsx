import { useState } from 'react';
import { LandingPage } from './components/LandingPage';
import { CharacterSelection } from './components/CharacterSelection';
import { GameIntro } from './components/GameIntro';
import { ScenarioScreen } from './components/ScenarioScreen';
import { ResultsScreen } from './components/ResultsScreen';
import { ReflectionScreen } from './components/ReflectionScreen';
import { ExitModal } from './components/ExitModal';
import { INITIAL_SCORES, updateScores, type Scores } from './utils/scoreCalculations';
import { determinePersonalityType, type Personality } from './utils/personalityAlgorithm';
import { generateReflectionPDF } from './utils/pdfGenerator';
import { scenariosData } from './data/scenarios';

type GameScreen =
  | 'landing'
  | 'character-selection'
  | 'intro'
  | 'scenario'
  | 'results'
  | 'reflection';

interface GameChoice {
  scenarioId: number;
  scenarioTitle: string;
  choiceSelected: string;
  choiceText: string;
  impacts: {
    integrity: number;
    trust: number;
    sustainability: number;
  };
}

const characterNames: Record<string, string> = {
  student: 'Student',
  teacher: 'Teacher',
  mayor: 'Mayor',
  entrepreneur: 'Entrepreneur',
};

function App() {
  const [currentScreen, setCurrentScreen] = useState<GameScreen>('landing');
  const [selectedCharacter, setSelectedCharacter] = useState<string>('student');
  const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0);
  const [scores, setScores] = useState<Scores>(INITIAL_SCORES);
  const [previousScores, setPreviousScores] = useState<Scores>(INITIAL_SCORES);
  const [choices, setChoices] = useState<GameChoice[]>([]);
  const [currentConsequence, setCurrentConsequence] = useState<string>('');
  const [currentChoiceId, setCurrentChoiceId] = useState<string>('');
  const [personality, setPersonality] = useState<Personality | null>(null);
  const [showExitModal, setShowExitModal] = useState(false);
  const [sessionId] = useState(() => crypto.randomUUID());

  const resetGame = () => {
    setCurrentScreen('landing');
    setSelectedCharacter('student');
    setCurrentScenarioIndex(0);
    setScores(INITIAL_SCORES);
    setPreviousScores(INITIAL_SCORES);
    setChoices([]);
    setCurrentConsequence('');
    setCurrentChoiceId('');
    setPersonality(null);
    setShowExitModal(false);
  };

  const handleStart = () => {
    setCurrentScreen('character-selection');
  };

  const handleCharacterSelect = (characterId: string) => {
    setSelectedCharacter(characterId);
    setCurrentScreen('intro');
  };

  const handleSkipCharacter = () => {
    const randomCharacters = ['student', 'teacher', 'mayor', 'entrepreneur'];
    const randomChar = randomCharacters[Math.floor(Math.random() * randomCharacters.length)];
    setSelectedCharacter(randomChar);
    setCurrentScreen('intro');
  };

  const handleBegin = () => {
    setCurrentScreen('scenario');
  };

  const handleChoiceSelect = (
    choiceId: string,
    consequence: string,
    impacts: { integrity: number; trust: number; sustainability: number }
  ) => {
    const scenario = scenariosData.scenarios[currentScenarioIndex];
    const choice = scenario.choices.find((c) => c.id === choiceId);

    if (!choice) return;

    // Update scores
    const newScores = updateScores(scores, impacts);
    setScores(newScores);

    // Record choice
    const gameChoice: GameChoice = {
      scenarioId: scenario.id,
      scenarioTitle: scenario.title,
      choiceSelected: choiceId,
      choiceText: choice.text,
      impacts: impacts,
    };
    setChoices([...choices, gameChoice]);

    // Move to next scenario or results (skip consequence screen)
    if (currentScenarioIndex < scenariosData.scenarios.length - 1) {
      // Move to next scenario
      setCurrentScenarioIndex(currentScenarioIndex + 1);
      setCurrentScreen('scenario');
    } else {
      // Game complete - calculate personality
      const personalityResult = determinePersonalityType(newScores);
      setPersonality(personalityResult);
      setCurrentScreen('results');
    }
  };

  const handleContinueFromConsequence = () => {
    if (currentScenarioIndex < scenariosData.scenarios.length - 1) {
      // Move to next scenario
      setCurrentScenarioIndex(currentScenarioIndex + 1);
      setCurrentScreen('scenario');
    } else {
      // Game complete - calculate personality
      const personalityResult = determinePersonalityType(scores);
      setPersonality(personalityResult);
      setCurrentScreen('results');
    }
  };

  const handlePlayAgain = () => {
    resetGame();
  };

  const handleDownloadPDF = () => {
    if (!personality) return;

    const pdfData = {
      sessionId,
      completedAt: new Date().toLocaleDateString(),
      personality,
      finalScores: scores,
      choices,
    };

    generateReflectionPDF(pdfData);
  };

  const handleReflect = () => {
    setCurrentScreen('reflection');
  };

  const handleSaveReflections = (reflections: Record<string, string>) => {
    if (!personality) return;

    const pdfData = {
      sessionId,
      completedAt: new Date().toLocaleDateString(),
      personality,
      finalScores: scores,
      choices,
      reflections,
    };

    generateReflectionPDF(pdfData);

    // Go back to results
    setCurrentScreen('results');
  };

  const handleSkipReflections = () => {
    setCurrentScreen('results');
  };

  const handleExit = () => {
    setShowExitModal(true);
  };

  const handleConfirmExit = () => {
    resetGame();
    setShowExitModal(false);
  };

  const handleCancelExit = () => {
    setShowExitModal(false);
  };

  // Get current scenario with character context
  const getCurrentScenario = () => {
    const scenario = scenariosData.scenarios[currentScenarioIndex];
    const contextText = scenario.character_context[selectedCharacter as keyof typeof scenario.character_context];
    const fullDescription = `${contextText}. ${scenario.description}`;

    return {
      ...scenario,
      description: fullDescription,
    };
  };

  return (
    <>
      {currentScreen === 'landing' && <LandingPage onStart={handleStart} />}

      {currentScreen === 'character-selection' && (
        <CharacterSelection onSelect={handleCharacterSelect} onSkip={handleSkipCharacter} />
      )}

      {currentScreen === 'intro' && (
        <GameIntro
          characterName={characterNames[selectedCharacter]}
          onBegin={handleBegin}
        />
      )}

      {currentScreen === 'scenario' && (
        <ScenarioScreen
          scenarioNumber={currentScenarioIndex + 1}
          totalScenarios={scenariosData.scenarios.length}
          title={getCurrentScenario().title}
          description={getCurrentScenario().description}
          choices={getCurrentScenario().choices}
          onChoiceSelect={handleChoiceSelect}
          onExit={handleExit}
        />
      )}

      {currentScreen === 'results' && personality && (
        <ResultsScreen
          personality={personality}
          finalScores={scores}
          onPlayAgain={handlePlayAgain}
          onDownloadPDF={handleDownloadPDF}
          onReflect={handleReflect}
        />
      )}

      {currentScreen === 'reflection' && (
        <ReflectionScreen
          onSaveAndDownload={handleSaveReflections}
          onSkip={handleSkipReflections}
        />
      )}

      <ExitModal
        isOpen={showExitModal}
        onCancel={handleCancelExit}
        onConfirm={handleConfirmExit}
      />
    </>
  );
}

export default App;