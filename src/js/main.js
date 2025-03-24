const toggleMenuOnSmallDevice = () => {
  const hamburgerMenu = document.querySelector("#hamburger_menu");
  const closeMenu = document.querySelector("#close_menu");
  const navigation = document.querySelector("#navigation");

  const handleToggleMenu = () => {
    if (hamburgerMenu.classList.contains("block")) {
      hamburgerMenu.classList.remove("block");
      hamburgerMenu.classList.add("hidden");
      closeMenu.classList.remove("hidden");
      closeMenu.classList.add("block");
      navigation.classList.remove("-left-[100%]");
      navigation.classList.add("left-0");
    } else {
      hamburgerMenu.classList.add("block");
      hamburgerMenu.classList.remove("hidden");
      closeMenu.classList.add("hidden");
      closeMenu.classList.remove("block");
      navigation.classList.add("-left-[100%]");
      navigation.classList.remove("left-0");
    }
  };

  hamburgerMenu.addEventListener("click", handleToggleMenu);
  closeMenu.addEventListener("click", handleToggleMenu);
};

toggleMenuOnSmallDevice();

// JOurney
const onHoverJourney = () => {
  const journetData = [
    {
      id: 1,
      image: "./src/svg/strategy.svg",
      imageHover: "./src/svg/strategy-hover.svg",
      name: "Strategy",
      description:
        "Digital consultancy, strategy and roadmap for your business.",
      color: "bg-blue-600",
      link: "#",
    },
    {
      id: 2,
      image: "./src/svg/design-hover.svg",
      imageHover: "./src/svg/design.svg",
      name: "Design",
      description:
        "Creative services that feel great and achieve outstanding results",
      color: "bg-orange-600",
      link: "#",
    },
    {
      id: 3,
      image: "./src/svg/engineering-hover.svg",
      imageHover: "./src/svg/engineering.svg",
      name: "Engineering",
      description:
        "Building solutions that are resilient and provide impeccable value.",
      color: "bg-green-600",
      link: "#",
    },
    {
      id: 4,
      image: "./src/svg/marketing-hover.svg",
      imageHover: "./src/svg/marketing.svg",
      name: "Marketing",
      description: "Reach a broader audience, make more sales and profit.",
      color: "bg-purple-600",
      link: "#",
    },
  ];
  const journey = document.querySelector("#journey");
  //Loop here

  journey.innerHTML = journetData
    .map((data) => {
      const { id, image, imageHover, name, description, color, link } = data;
      return `<a href=${link} key=${id}
            class="w-full flex justify-between items-center gap-4 py-7 border-b border-gray-100 lg:py-16 relative overflow-hidden group lg:px-6"
          >
            <!-- Animated Background Layer (Right-to-Left) -->
            <div
              class="absolute inset-0 ${color} transform origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"
            ></div>

            <!-- Your Existing Content -->
            <div class="flex justify-between items-center gap-4 relative z-10 w-full">
              <div class="flex justify-between items-center gap-4">
                <div class="shrink-0">
                  <!-- Normal Image -->
                  <img
                    class="w-16 rounded-full border-gray-100 group-hover:block hidden"
                    src="${image}"
                    alt="${name} image"
                  />
                  <!-- Hover Image -->
                  <img
                    class="w-16 rounded-full border-gray-100 block group-hover:hidden"
                    src="${imageHover}"
                    alt="${name} hover image"
                  />
                </div>
                <div class="flex flex-col justify-start items-start gap-2">
                  <h3 class="text-2xl font-normal text-blue-950 group-hover:text-white transition-colors duration-300">
                    ${name}
                  </h3>
                  <p class="text-base font-normal text-gray-700 group-hover:text-white transition-colors duration-300">
                    ${description}
                  </p>
                </div>
              </div>
              <!-- Arrow that moves from left to right -->
              <div
                class="shrink-0 transform transition-transform duration-300 group-hover:translate-x-4 bg-white border border-gray-50 shadow-2xl rounded-full p-4"
              >
                <img src="./src/svg/arrowRight.svg" alt="Arrow" />
              </div>
            </div>
          </a>`;
    })
    .join("");
};

onHoverJourney();
