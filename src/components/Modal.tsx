type ModalProps = {
  onClose: () => void;
};

export default function Modal({ onClose }: ModalProps) {
  return (
    <div>
      <h2>모달 제목</h2>
      <p>모달 내용</p>
      <button
        type="button"
        onClick={onClose}
      >
        닫기
      </button>
    </div>
  );
}
