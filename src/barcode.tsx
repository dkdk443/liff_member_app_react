import { useBarcode } from 'next-barcode';

const Barcode = (props: any) => {
  const memberId = props.memberId;
  const { inputRef } = useBarcode({
    value: memberId,
    options: {
      displayValue: false,
      width: 1.5,
      height: 80
    }
  });
  return (
    <div>
      <canvas ref={inputRef} />
    </div>
  );
}

export default Barcode;