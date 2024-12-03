import {
  Box,
  Button,
  Container,
  Heading,
  Input,
  useColorModeValue,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useRestaurant } from "../store/restaurant";
import Footer from "../components/Footer";

const AddRestaurant = () => {
  const [newRestaurant, setNewRestaurant] = useState({
    name: "",
    price: "",
    image: "",
  });
  const [lottieScriptLoaded, setLottieScriptLoaded] = useState(false);
  const toast = useToast();
  const { createRestaurant } = useRestaurant();

  const handleAddRestaurant = async () => {
    const { success, message } = await createRestaurant(newRestaurant);
    if (!success) {
      toast({
        title: "Error",
        description: message,
        status: "error",
        isClosable: true,
      });
    } else {
      toast({
        title: "Success",
        description: message,
        status: "success",
        isClosable: true,
      });
    }
    setNewRestaurant({ name: "", price: "", image: "" });
  };

  useEffect(() => {
    // Dynamically load the Lottie player script only once
    if (!lottieScriptLoaded) {
      const script = document.createElement("script");
      script.src =
        "https://unpkg.com/@dotlottie/player-component@2.7.12/dist/dotlottie-player.mjs";
      script.type = "module";
      script.onload = () => setLottieScriptLoaded(true);
      document.body.appendChild(script);
    }
  }, [lottieScriptLoaded]);

  return (
    <div>
      <Container maxW={"container.sm"} py={12}>
        <VStack spacing={8}>
          <Heading
            as={"h1"}
            size={"2xl"}
            textAlign={"center"}
            mb={8}
            color="#CA2F35"
          >
            Add New Restaurant
          </Heading>

          <Box
            w={"full"}
            bg={useColorModeValue("white", "gray.800")}
            p={6}
            rounded={"lg"}
            shadow={"md"}
          >
            <VStack spacing={4}>
              <Input
                placeholder="Restaurant Name"
                name="name"
                value={newRestaurant.name}
                onChange={(e) =>
                  setNewRestaurant({ ...newRestaurant, name: e.target.value })
                }
              />
              <Input
                placeholder="Price"
                name="price"
                type="string"
                value={newRestaurant.price}
                onChange={(e) =>
                  setNewRestaurant({ ...newRestaurant, price: e.target.value })
                }
              />
              <Input
                placeholder="Image URL"
                name="image"
                value={newRestaurant.image}
                onChange={(e) =>
                  setNewRestaurant({ ...newRestaurant, image: e.target.value })
                }
              />

              <Button
                colorScheme="yellow"
                onClick={handleAddRestaurant}
                w="full"
              >
                Add Restaurant
              </Button>

              {/* Only render Lottie player after the script has been loaded */}
              {lottieScriptLoaded && (
                <dotlottie-player
                  src="https://lottie.host/97481f57-39fe-4071-92bb-65aa4c6d34e6/SEt2HDxMZo.lottie"
                  background="transparent"
                  speed="1"
                  style={{ width: "300px", height: "300px" }}
                  loop
                  autoplay
                ></dotlottie-player>
              )}
            </VStack>
          </Box>
        </VStack>
      </Container>
      <Footer />
    </div>
  );
};

export default AddRestaurant;
