const settings = {
  name: "frontity-js",
  state: {
    frontity: {
      url: "https://test.frontity.org",
      title: "Test Frontity Blog",
      description: "WordPress installation for Frontity development",
    },
  },
  packages: [
    {
      name: "jsnation-theme",
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          // Aquí ponemos el sitio del que vamos a tirar
          // api: "http://localhost:8888/frontity-wp/wp-json",
          api: "https://jsnation2020.frontity.org/wp-json",
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
  ],
};

export default settings;
