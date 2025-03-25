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

//Case studies
const displayCaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      company_logo: "./src/svg/caseStudieLogo1.svg",
      company_name: "Aubuchon hardware",
      company_title:
        "Multiple brands in one for largest hardware seller in United States",
      technology_use_logo: [
        "./src/svg/logo-adobe.svg",
        "./src/svg/logo-pwa.svg",
        "./src/svg/logo-react.svg",
        "./src/svg/logo-wunderkind.svg",
        "./src/svg/logo-klevu.svg",
      ],
      background_image: "./src/images/caseStudie1.avif",
      background_color: "bg-emerald-100",
    },
    {
      id: 2,
      company_logo: "./src/svg/caseStudieLogo2.svg",
      company_name: "Dunkin",
      company_title:
        "Rebuild for one of the most impressive brands in the world",
      technology_use_logo: [
        "./src/svg/logo-magento.svg",
        "./src/svg/logo-aws.svg",
        "./src/svg/logo-hyva.svg",
      ],
      background_image: "./src/images/caseStudie2.avif",
      background_color: "bg-orange-100",
    },
    {
      id: 3,
      company_logo: "./src/svg/caseStudieLogo3.svg",
      company_name: "Gust",
      company_title: "Building the best university website in Kuwait for Gust",
      technology_use_logo: [
        "./src/svg/logo-vercel.svg",
        "./src/svg/logo-directus.svg",
        "./src/svg/logo-nextjs.svg",
        "./src/svg/logo-react.svg",
        "./src/svg/logo-tailwind.svg",
      ],
      background_image: "./src/images/caseStudie3.avif",
      background_color: "bg-indigo-100",
    },
    {
      id: 4,
      company_logo: "./src/svg/caseStudiesLogo4.svg",
      company_name: "Dynamic yield",
      company_title:
        "Official integration on Adobe COmmerce for Mastercard's dynamic yield",
      technology_use_logo: [
        "./src/svg/logo-adobe.svg",
        "./src/svg/logo-aws.svg",
        "./src/svg/logo-dynamic.svg",
      ],
      background_image: "./src/images/caseStudie4.avif",
      background_color: "",
    },
  ];
  const caseStudiesContainers = document.querySelector(
    "#caseStudiesContainers"
  );
  caseStudiesContainers.innerHTML = caseStudies
    .map((caseStudy) => {
      const {
        id,
        company_logo,
        company_name,
        company_title,
        technology_use_logo,
        background_image,
        background_color,
      } = caseStudy;
      return `<div key=${id} class="relative my-10">
            <div
              class="w-full h-[442px] flex justify-center items-center ${background_color}"
            >
              <img
                class="w-full h-full object-contain object-bottom lg:object-center lg:object-cover"
                src="${background_image}"
                alt=""
              />
            </div>
            <div
              class="w-full flex flex-col justify-center items-start gap-4 px-8 absolute top-6 left-0 md:w-[560px] md:h-[300px] md:justify-between md:py-5"
            >
              <img src="${company_logo}" alt="${company_name}">
              <h3
                class="text-3xl font-normal text-gray-700 text-left lg:text-4xl"
              >
               ${company_title}
              </h3>
              <div class="w-full grid grid-cols-5 gap-4">
                ${technology_use_logo
                  .map((tech) => {
                    return `<img class="shrink" src="${tech}" alt="" />`;
                  })
                  .join("")}
              </div>
            </div>
          </div>`;
    })
    .join("");
};

displayCaseStudies();
