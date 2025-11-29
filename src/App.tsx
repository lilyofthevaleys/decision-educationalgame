import { useState, useEffect } from 'react';
import { ArticlesPage } from './components/ArticlesPage';
import { CreditsPage } from './components/CreditsPage';
import { LandingPage } from './components/LandingPage';
import { HoverMenu } from './components/HoverMenu';
import { CharacterSelection } from './components/CharacterSelection';
import { GameIntro } from './components/GameIntro';
import { ScenarioScreen } from './components/ScenarioScreen';
import { ResultsScreen } from './components/ResultsScreen';
import { ReflectionScreen } from './components/ReflectionScreen';
import { ExitModal } from './components/ExitModal';
import { INITIAL_SCORES, updateScores, type Scores } from './utils/scoreCalculations';
import { determinePersonalityType, type Personality } from './utils/personalityAlgorithm';
import { generateReflectionPDF } from './utils/pdfGenerator';
import { questionBank, type RoleQuestion } from './data/questionBank';
import { AudioManager } from './audio/AudioManager';
// Build image maps for each role
const studentMods = import.meta.glob('./images/student/*.{png,jpg,jpeg}', { eager: true, as: 'url' }) as Record<string, string>;
const teacherMods = import.meta.glob('./images/teacher/*.{png,jpg,jpeg}', { eager: true, as: 'url' }) as Record<string, string>;
const entrepreneurMods = import.meta.glob('./images/entrepreneur/*.{png,jpg,jpeg}', { eager: true, as: 'url' }) as Record<string, string>;

const studentImageMap: Record<number, string> = Object.entries(studentMods).reduce((acc, [path, url]) => {
  const base = path.split('/').pop() || '';
  const numMatch = base.match(/(\d+)/);
  if (numMatch) acc[parseInt(numMatch[1], 10)] = url;
  return acc;
}, {} as Record<number, string>);

const teacherImageMap: Record<number, string> = Object.entries(teacherMods).reduce((acc, [path, url]) => {
  const base = path.split('/').pop() || '';
  const m = base.match(/q(\d+)_teach/i);
  if (m) acc[parseInt(m[1], 10)] = url;
  return acc;
}, {} as Record<number, string>);

const entrepreneurImageMap: Record<number, string> = Object.entries(entrepreneurMods).reduce((acc, [path, url]) => {
  const base = path.split('/').pop() || '';
  const m = base.match(/q(\d+)_ent/i);
  if (m) acc[parseInt(m[1], 10)] = url;
  return acc;
}, {} as Record<number, string>);

function getQuestionImage(role: 'student' | 'teacher' | 'entrepreneur', index1: number): string | undefined {
  if (role === 'student') return studentImageMap[index1];
  if (role === 'teacher') return teacherImageMap[index1];
  if (role === 'entrepreneur') return entrepreneurImageMap[index1];
}

type GameScreen =
  | 'landing'
  | 'character-selection'
  | 'intro'
  | 'scenario'
  | 'results'
  | 'reflection'
  | 'articles'
  | 'credits';

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
  const [prevScreen, setPrevScreen] = useState<GameScreen | null>(null);

  useEffect(() => {
    AudioManager.playBGMFor(currentScreen);
  }, [currentScreen]);

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
    setCurrentScenarioIndex(0);
    setScores(INITIAL_SCORES);
    setPreviousScores(INITIAL_SCORES);
    setChoices([]);
    setPersonality(null);
    setCurrentScreen('character-selection');
  };

  const handleCharacterSelect = (characterId: string) => {
    setSelectedCharacter(characterId);
    setCurrentScenarioIndex(0);
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
    const roleKey = selectedCharacter as 'student' | 'teacher' | 'entrepreneur';
    const scenario = questionBank.roles[roleKey][currentScenarioIndex];
    const choice = scenario.choices.find((c) => c.id === (choiceId as any));

    if (!choice) return;

    // Update scores
    const newScores = updateScores(scores, impacts);
    setScores(newScores);

    // Record choice
    const gameChoice: GameChoice = {
      scenarioId: scenario.id,
      scenarioTitle: `Question ${scenario.id}: ${scenario.text}`,
      choiceSelected: choiceId,
      choiceText: choice.text,
      impacts: impacts,
    };
    setChoices([...choices, gameChoice]);

    // Move to next scenario or results (skip consequence screen)
    const totalScenarios = questionBank.roles[roleKey].length;
    if (currentScenarioIndex < totalScenarios - 1) {
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
    const roleKey = selectedCharacter as 'student' | 'teacher' | 'entrepreneur';
    const totalScenarios = questionBank.roles[roleKey].length;
    if (currentScenarioIndex < totalScenarios - 1) {
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

  

  const handleExit = () => {
    setShowExitModal(true);
  };

  const handleOpenArticles = () => {
    setPrevScreen(currentScreen);
    setCurrentScreen('articles');
  };

  const handleBackFromArticles = () => {
    setCurrentScreen(prevScreen ?? 'landing');
    setPrevScreen(null);
  };

  const handleOpenCredits = () => {
    setPrevScreen(currentScreen);
    setCurrentScreen('credits');
  };

  const handleBackFromCredits = () => {
    setCurrentScreen(prevScreen ?? 'landing');
    setPrevScreen(null);
  };

  const handleConfirmExit = () => {
    resetGame();
    setShowExitModal(false);
  };

  const handleCancelExit = () => {
    setShowExitModal(false);
  };

  // Get current question for selected role
  const getCurrentQuestion = () => {
    const roleKey = selectedCharacter as 'student' | 'teacher' | 'entrepreneur';
    const q = questionBank.roles[roleKey][currentScenarioIndex];
    return q;
  };

  return (
    <>
      {currentScreen === 'landing' && <HoverMenu onNavigateArticles={handleOpenArticles} onNavigateCredits={handleOpenCredits} />}
      {currentScreen === 'landing' && <LandingPage onStart={handleStart} />}

      {currentScreen === 'character-selection' && (
        <CharacterSelection onSelect={handleCharacterSelect} />
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
          totalScenarios={questionBank.roles[selectedCharacter as 'student' | 'teacher' | 'entrepreneur'].length}
          title={`Question ${currentScenarioIndex + 1}`}
          description={getCurrentQuestion().text}
          choices={getCurrentQuestion().choices.map((c) => ({ ...c, consequence: '' })) as any}
          onChoiceSelect={handleChoiceSelect}
          onExit={handleExit}
          imageSrc={getQuestionImage(selectedCharacter as 'student' | 'teacher' | 'entrepreneur', currentScenarioIndex + 1)}
        />
      )}

      {currentScreen === 'results' && personality && (
        <>
          <ResultsScreen
            personality={personality}
            finalScores={scores}
            onPlayAgain={handlePlayAgain}
            onDownloadPDF={handleDownloadPDF}
            onReflect={handleReflect}
            onNavigateArticles={handleOpenArticles}
          />
          <HoverMenu onNavigateArticles={handleOpenArticles} onNavigateCredits={handleOpenCredits} />
        </>
      )}

      {currentScreen === 'reflection' && (
        <ReflectionScreen
          onSaveAndDownload={handleSaveReflections}
        />
      )}

      {currentScreen === 'articles' && (
        <ArticlesPage onBack={handleBackFromArticles} />
      )}

      {currentScreen === 'credits' && (
        <CreditsPage onBack={handleBackFromCredits} />
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
