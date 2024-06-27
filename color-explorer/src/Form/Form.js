import React, {
  useState,
  useEffect,
} from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import ColorizeIcon from "@mui/icons-material/Colorize";
import ColorSquare from "../ColorSquare/ColorSquare";
import RainbowLoader from "../RainbowLoader/RainbowLoader.js";
import ColorPickerListener from "../ColorPicker/ColorPickerListener.js";
import makeAPIRequest from "../ApiCall/groq-prompt.js";

export const Form = () => {
  const [loading, setLoading] = useState(false);
  
  const initialValues = {
    inputInstructions: "",
    inputColor: "",
  };

  const [formValues, setFormValues] = useState(initialValues);

  const [formErrors, setFormErrors] = useState({});

  const [isSubmit, setIsSubmit] = useState(false);

  const [palette, setPalette] = useState([]);
  const [description, setDescription] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

useEffect(() => {
  if (Object.keys(formErrors).length === 0 && isSubmit) {
    setLoading(true);
    const timer = setTimeout(() => {
      makeAPIRequest(formValues.inputColor, formValues.inputInstructions)
      .then(response => {
        let start = response.indexOf("{");
        let end = response.lastIndexOf("}") + 1;

        let jsonString = response.substring(start, end);
        let jsonObject = JSON.parse(jsonString);

        setPalette(jsonObject.palette);
        setDescription(jsonObject.description);

        console.log(jsonObject.palette);
        console.log(jsonObject.description);
      })
      .catch (error => {
        console.error(error);
      });
      setLoading(false);
    }, 5000);
    return () => clearTimeout(timer);
  }
}, [formErrors]);

  const validate = (values) => {
    const errors = {};
    if (!values.inputInstructions) {
      errors.inputInstructions = "Please give us some instructions.";
    }
    if (!values.inputColor) {
      errors.inputColor = "Please choose a color or enter a color code.";
    }
    return errors;
  }

  const handleColorChange = (newColor) => {
    setFormValues({
      ...formValues,
      inputColor: newColor,
    });
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="w-2/3"
      >
        <div className="text-left">
          <h1 className="font-sometype text-4xl font-bold leading-114 mb-4">
            Welcome to your color picker
          </h1>
          <p className="font-sometype text-base text-xl font-normal mb-14">
            Choose a color or input your
            color code, give us some
            instructions, and see your
            custom recommended color
            palette!
          </p>
          <Input
            name="inputInstructions"
            labelName="Give us some instructions:"
            placeholder="Ex: Suggest compatible colors based on the color given for a simple logo for a clothing brand."
            className="input w-967 font-sometype text-base border-b-4 border-black focus:border-b-4 focus:outline-none"
            value={
              formValues.inputInstructions
            }
            onChange={handleChange}
          />
          <div className="flex items-center">
            <Input
              name="inputColor"
              labelName="Choose a color or input your color code:"
              placeholder="#000000"
              className="input w-353 font-sometype text-base border-b-4 border-black focus:border-b-4 focus:outline-none."
              value={
                formValues.inputColor
              }
              onChange={handleChange}
            />
            <ColorizeIcon className="-ml-24 mt-6 cursor-pointer" data-testid="ColorizeIcon" />
            <ColorSquare color={formValues.inputColor} />
          </div>
          <p className="font-sometype text-red-600/100 font-bold text-lg">
            {formErrors.inputColor}
            {formErrors.inputInstructions}
          </p>
          <Button buttonText="Get Palette" />
          <div className="mt-8">
            {loading ? (
              <RainbowLoader />
            ) : (
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  {palette.map((item, index) => (
                    <div key={index} className="flex flex-col">
                      {Object.entries(item).map(([key, value]) => (
                        <div key={key}>{`${key}: ${value}`}</div>
                      ))}
                    </div>
                  ))}
                </div>
                <div>{description}</div>
              </div>
            )}
          </div>
        </div>
      </form>
      <ColorPickerListener onChangeColor={handleColorChange} />
    </div>
  );
};
