import { Button } from './Button';

interface ExitModalProps {
  isOpen: boolean;
  onCancel: () => void;
  onConfirm: () => void;
}

export function ExitModal({ isOpen, onCancel, onConfirm }: ExitModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80"
        onClick={onCancel}
      />

      {/* Modal */}
      <div className="relative bg-[#1A0933] border-2 border-[#7B2CBF] rounded-2xl p-8 max-w-md w-full mx-4 shadow-xl">
        <div className="text-center">
          <div className="text-5xl mb-4">⚠️</div>
          <h2 className="text-white text-2xl mb-2">Are you sure?</h2>
          <p className="text-gray-300 mb-6">Your progress will be lost.</p>

          <div className="flex gap-4 justify-center">
            <Button variant="secondary" onClick={onCancel}>
              CANCEL
            </Button>
            <Button variant="danger" onClick={onConfirm}>
              YES, EXIT
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
