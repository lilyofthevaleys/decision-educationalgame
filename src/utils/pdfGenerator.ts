import jsPDF from 'jspdf';
import { Scores } from './scoreCalculations';
import { Personality } from './personalityAlgorithm';

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

interface ReflectionAnswers {
  [key: string]: string;
}

interface PDFData {
  sessionId: string;
  completedAt: string;
  personality: Personality;
  finalScores: Scores;
  choices: GameChoice[];
  reflections?: ReflectionAnswers;
}

const REFLECTION_QUESTIONS = [
  'Which dilemma made you think twice?',
  'Did you prioritize quick results or honesty?',
  'When did your integrity drop the most?',
  'What is "small corruption" in daily life?',
  'How will you maintain honesty moving forward?',
];

export function generateReflectionPDF(data: PDFData): void {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const margin = 20;
  const maxWidth = pageWidth - margin * 2;
  doc.setTextColor(0);
  doc.setFont('helvetica', 'normal');

  const header = () => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(12);
    doc.text('Decision Game Report', margin, 15);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    doc.text(`Session ${data.sessionId.substring(0, 8)}`, pageWidth - margin, 15, { align: 'right' });
    doc.setLineWidth(0.2);
    doc.line(margin, 18, pageWidth - margin, 18);
  };

  const addFooters = () => {
    const count = (doc as any).internal.getNumberOfPages();
    for (let i = 1; i <= count; i++) {
      doc.setPage(i);
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(9);
      doc.setTextColor(80);
      doc.text(`Page ${i} of ${count}`, margin, 285);
      doc.text(data.completedAt, pageWidth - margin, 285, { align: 'right' });
      doc.setTextColor(0);
    }
  };

  header();
  let y = 30;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(14);
  doc.text('Moral Profile', margin, y);
  y += 10;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  doc.text(`Date: ${data.completedAt}`, margin, y);
  doc.text(`Type: ${data.personality.title}`, margin, y + 6);
  y += 16;
  doc.setLineWidth(0.2);
  doc.line(margin, y, pageWidth - margin, y);
  y += 8;

  const descLines = doc.splitTextToSize(data.personality.description, maxWidth);
  doc.setFontSize(11);
  doc.text(descLines, margin, y);
  y += descLines.length * 6 + 8;
  const reflectionLines = doc.splitTextToSize(data.personality.reflection, maxWidth);
  doc.setFontSize(10);
  doc.text(reflectionLines, margin, y);
  y += reflectionLines.length * 5 + 12;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12);
  doc.text('Final Scores', margin, y);
  y += 10;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(11);
  doc.text(`Integrity: ${data.finalScores.integrity}%`, margin, y);
  doc.text(`Trust: ${data.finalScores.trust}%`, margin, y + 8);
  doc.text(`Sustainability: ${data.finalScores.sustainability}%`, margin, y + 16);

  if (data.reflections && Object.keys(data.reflections).length > 0) {
    doc.addPage();
    header();
    y = 30;
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(12);
    doc.text('Personal Reflections', margin, y);
    y += 12;
    for (let i = 1; i <= 5; i++) {
      const answer = (data.reflections as any)[`question${i}`] as string | undefined;
      if (answer && answer.trim()) {
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(11);
        doc.text(`${i}. ${REFLECTION_QUESTIONS[i - 1]}`, margin, y);
        y += 7;
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(10);
        const lines = doc.splitTextToSize(answer, maxWidth);
        doc.text(lines, margin, y);
        y += lines.length * 5 + 10;
        if (y > 270) {
          doc.addPage();
          header();
          y = 30;
        }
      }
    }
  }

  doc.addPage();
  header();
  y = 30;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12);
  doc.text('Decision Journey', margin, y);
  y += 12;
  data.choices.forEach((choice, index) => {
    if (y > 250) {
      doc.addPage();
      header();
      y = 30;
    }
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.text(`Scenario ${index + 1}: ${choice.scenarioTitle}`, margin, y);
    y += 6;
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    const choiceLines = doc.splitTextToSize(`Choice ${choice.choiceSelected}: ${choice.choiceText}`, maxWidth);
    doc.text(choiceLines, margin, y);
    y += choiceLines.length * 4 + 6;
    doc.setFontSize(9);
    const impactText = `Impact: ${choice.impacts.integrity >= 0 ? '+' : ''}${choice.impacts.integrity} Integrity, ${choice.impacts.trust >= 0 ? '+' : ''}${choice.impacts.trust} Trust, ${choice.impacts.sustainability >= 0 ? '+' : ''}${choice.impacts.sustainability} Sustainability`;
    doc.text(impactText, margin, y);
    y += 10;
  });

  addFooters();
  doc.save(`decision-game-results-${data.sessionId.substring(0, 8)}.pdf`);
}
