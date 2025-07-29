import DatePicker from "react-date-picker";

const homeDatePicker = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div>
      <DatePicker
        onChange={setDate}
        value={date}
        format="dd/MM/yyyy"
        className="custom-date-picker"
      />
    </div>
  );
};

export default homeDatePicker;
