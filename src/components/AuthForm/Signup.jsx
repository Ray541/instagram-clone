import { useState } from "react";
import {
  Alert,
  AlertIcon,
  Button,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import useSignUpWithEmailAndPassowrd from "../../hooks/useSignUpWithEmailAndPassowrd";

const Signup = () => {
  const [inputs, setInputs] = useState({
    email: "",
    username: "",
    fullName: "",
    password: "",
  });

  const [showPassowrd, setShowPassowrd] = useState(false);

  const { loading, error, signup } = useSignUpWithEmailAndPassowrd();

  return (
    <>
      <Input
        value={inputs.email}
        onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
        placeholder="Email"
        _placeholder={{ color: "purple.100" }}
        fontSize={15}
        size={"sm"}
        type="email"
      />
      <Input
        value={inputs.username}
        onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
        placeholder="Username"
        _placeholder={{ color: "purple.100" }}
        fontSize={15}
        size={"sm"}
        type="text"
      />
      <Input
        value={inputs.fullName}
        onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
        placeholder="Full Name"
        _placeholder={{ color: "purple.100" }}
        fontSize={15}
        size={"sm"}
        type="text"
      />
      <InputGroup>
        <Input
          value={inputs.password}
          onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
          placeholder="Password"
          _placeholder={{ color: "purple.100" }}
          fontSize={15}
          size={"sm"}
          type={showPassowrd ? "text" : "password"}
        />
        <InputRightElement h={"full"}>
          <Button
            varient={"ghost"}
            size={"sm"}
            onClick={() => setShowPassowrd(!showPassowrd)}
          >
            {showPassowrd ? <ViewIcon /> : <ViewOffIcon />}
          </Button>
        </InputRightElement>
      </InputGroup>

      {error && (
        <Alert status="error" fontSize={15} p={2} borderRadius={5}>
          <AlertIcon fontSize={13} />
          {error.message}
        </Alert>
      )}

      <Button
        colorScheme="
          purple"
        size={"sm"}
        w={"full"}
        isLoading={loading}
        onClick={() => signup(inputs)}
      >
        Sign Up
      </Button>
    </>
  );
};

export default Signup;
