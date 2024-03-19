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
        _placeholder={{ color: "whiteAlpha.500" }}
        fontSize={15}
        size={"sm"}
        type="email"
        _focus={{ boxShadow: "unset", border: "1px solid white" }}
      />
      <Input
        value={inputs.username}
        onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
        placeholder="Username"
        _placeholder={{ color: "whiteAlpha.500" }}
        fontSize={15}
        size={"sm"}
        type="text"
        _focus={{ boxShadow: "unset", border: "1px solid white" }}
      />
      <Input
        value={inputs.fullName}
        onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
        placeholder="Full Name"
        _placeholder={{ color: "whiteAlpha.500" }}
        fontSize={15}
        size={"sm"}
        type="text"
        _focus={{ boxShadow: "unset", border: "1px solid white" }}
      />
      <InputGroup>
        <Input
          value={inputs.password}
          onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
          placeholder="Password atleast 6 characters"
          _placeholder={{ color: "whiteAlpha.500" }}
          fontSize={15}
          size={"sm"}
          type={showPassowrd ? "text" : "password"}
          _focus={{ boxShadow: "unset", border: "1px solid white" }}
        />
        <InputRightElement h={"full"}>
          <Button
            varient={"ghost"}
            size={"sm"}
            onClick={() => setShowPassowrd(!showPassowrd)}
            _focus={{ boxShadow: "unset", bg: "whiteAlpha.300" }}
          >
            {showPassowrd ? <ViewIcon /> : <ViewOffIcon />}
          </Button>
        </InputRightElement>
      </InputGroup>

      {error ? (
        <Alert status="error" fontSize={15} p={2} borderRadius={5}>
          <AlertIcon fontSize={13} />
          {console.log(error)}
          {error}
        </Alert>
      ) : null}

      <Button
        colorScheme="
          purple"
        size={"sm"}
        w={"full"}
        isLoading={loading}
        onClick={() => signup(inputs)}
        _focus={{
          boxShadow: "unset",
          bg: "purple.300",
        }}
      >
        Sign Up
      </Button>
    </>
  );
};

export default Signup;
