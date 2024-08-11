import { IoBalloon } from "react-icons/io5";
import Button from '../components/Button';

function ButtonPage() {
  const handleClick = () => {
    console.log("Clicked!!");
  };

  return (
    <div>
      <Button primary onClick={handleClick}> <IoBalloon/> Primary Button</Button>
      <Button secondary onClick={handleClick}> <IoBalloon/> Secondary Button</Button>
      <Button success onClick={handleClick}> <IoBalloon/> Success Button</Button>
      <Button warning onClick={handleClick}> <IoBalloon/> Warning Button</Button>
      <Button danger onClick={handleClick}> <IoBalloon/> Danger Button</Button>
      <Button outline primary onClick={handleClick}> <IoBalloon/> Primary Outline Button</Button>
      <Button outline secondary onClick={handleClick}> <IoBalloon/> Secondary Outline Button</Button>
      <Button outline success onClick={handleClick}> <IoBalloon/> Success Outline Button</Button>
      <Button outline warning onClick={handleClick}> <IoBalloon/> Warning Outline Button</Button>
      <Button outline danger onClick={handleClick}> <IoBalloon/> Danger Outline Button</Button>

      <Button primary rounded onClick={handleClick}> <IoBalloon/> Primary Button</Button>
      <Button secondary rounded onClick={handleClick}> <IoBalloon/> Secondary Button</Button>
      <Button success rounded onClick={handleClick}> <IoBalloon/> Success Button</Button>
      <Button warning rounded onClick={handleClick}> <IoBalloon/> Warning Button</Button>
      <Button danger rounded onClick={handleClick}> <IoBalloon/> Danger Button</Button>
      <Button outline rounded primary onClick={handleClick}> <IoBalloon/> Primary Outline Button</Button>
      <Button outline rounded secondary onClick={handleClick}> <IoBalloon/> Secondary Outline Button</Button>
      <Button outline rounded success onClick={handleClick}> <IoBalloon/> Success Outline Button</Button>
      <Button outline rounded warning onClick={handleClick}> <IoBalloon/> Warning Outline Button</Button>
      <Button outline rounded danger onClick={handleClick}> <IoBalloon/> Danger Outline Button</Button>
    </div>
  );
}

export default ButtonPage;
