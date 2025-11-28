import { motion } from 'motion/react';
import { useState } from 'react';
import { Button } from './Button';
import { reflectionsData } from '../data/reflections';

interface ReflectionScreenProps {
  onSaveAndDownload: (reflections: Record<string, string>) => void;
}

export function ReflectionScreen({ onSaveAndDownload }: ReflectionScreenProps) {
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const handleAnswerChange = (questionId: number, value: string) => {
    setAnswers((prev) => ({
      ...prev,
      [`question${questionId}`]: value,
    }));
  };

  const handleSave = () => {
    onSaveAndDownload(answers);
  };

  const hasAnyAnswer = Object.values(answers).some((answer) => answer.trim() !== '');

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1A0933] via-[#2d1154] to-[#1A0933] p-4 md:p-8 overflow-y-auto">
      <div className="max-w-3xl mx-auto py-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-[#00FF9F] text-4xl md:text-5xl mb-4">
            REFLECT ON YOUR JOURNEY
          </h1>
          <div className="w-48 h-1 bg-[#00FF9F] mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="space-y-8 mb-12"
        >
          {reflectionsData.questions.map((question, index) => (
            <motion.div
              key={question.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-white/10"
            >
              <label className="block mb-4">
                <span className="text-white text-lg block mb-3">
                  {question.id}. {question.text}
                </span>
                <textarea
                  value={answers[`question${question.id}`] || ''}
                  onChange={(e) => handleAnswerChange(question.id, e.target.value)}
                  placeholder={question.placeholder}
                  maxLength={500}
                  rows={4}
                  className="w-full bg-transparent border border-gray-700 rounded-lg p-4 text-white placeholder-gray-500 focus:border-[#00FF9F] focus:outline-none transition-colors resize-none"
                />
                <div className="text-right text-gray-500 text-sm mt-2">
                  {(answers[`question${question.id}`] || '').length}/500
                </div>
              </label>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Button
            variant="primary"
            onClick={handleSave}
            className={hasAnyAnswer ? 'animate-pulse' : ''}
          >
            SAVE & DOWNLOAD PDF
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="text-center mt-8"
        >
          <p className="text-gray-400 text-sm">
            Your reflections will be included in your downloadable PDF report.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
