import Button from '../component/StyledButton';

export default function Home() {
  return (
    <div>
      <Button>Click Me</Button>
      <Image src={profilePic} alt="Profile Picture" width={150} height={150} />
    </div>
  );
}