import { Container, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useRestaurant } from "../store/restaurant";
import Footer from "../components/Footer";
import RestaurantCard from "../components/RestaurantCard";

const RestaurantPage = () => {
  const { fetchRestaurants, restaurants } = useRestaurant();

  useEffect(() => {
    fetchRestaurants();
  }, [fetchRestaurants]);
  console.log("restaurants", restaurants);

  return (
    <div>
      <Container maxW="container.xl" py={12}>
        <VStack spacing={8}>
          <Text
            fontSize={"50"}
            fontWeight={"bold"}
            bgGradient={"linear(to-r, cyan.400, blue.500)"}
            bgClip={"text"}
            textAlign={"center"}
            as={"h1"}
            mb={8}
            color="#CA2F35"
          >
            Restaurant Lists
          </Text>

          <SimpleGrid
            columns={{
              base: 1,
              md: 2,
              lg: 3,
            }}
            spacing={10}
            w={"full"}
          >
            {restaurants.map((restaurant) => (
              <RestaurantCard key={restaurant._id} restaurant={restaurant} />
            ))}
          </SimpleGrid>

          {restaurants.length === 0 && (
            <Text
              fontSize="xl"
              textAlign={"center"}
              fontWeight="bold"
              color="gray.500"
            >
              No restaurants found 😢{" "}
              <Link to={"/create"}>
                <Text
                  as="span"
                  color="blue.500"
                  _hover={{ textDecoration: "underline" }}
                >
                  Create a restaurant
                </Text>
              </Link>
            </Text>
          )}
        </VStack>
      </Container>
      <Footer />
    </div>
  );
};
export default RestaurantPage;
