const dinoSupplyTemplate = {
  colored: 296,
  albino: 28,
  earth: 25,
  wind: 25,
  fire: 25,
  ice: 25,
  ultraRare: 16,
  legendary: 4,
};
export const dinos = [
  { name: "ankylosaurus", ...dinoSupplyTemplate },
  { name: "baryonyx", ...dinoSupplyTemplate },
  { name: "brachiosaurus", ...dinoSupplyTemplate },
  { name: "brontosaurus", ...dinoSupplyTemplate },
  { name: "coelophysis", ...dinoSupplyTemplate },
  {
    name: "parasaulorophus",
    ...dinoSupplyTemplate,
  },
  { name: "pterodactyl", ...dinoSupplyTemplate },
  {
    name: "spinosaurus",
    ...dinoSupplyTemplate,
  },
  { name: "stegosaurus", ...dinoSupplyTemplate },
  { name: "triceratops", ...dinoSupplyTemplate },
  { name: "tyrannosaurus", ...dinoSupplyTemplate },
  { name: "velociraptor", ...dinoSupplyTemplate },
  { name: "achelosaurus", ...dinoSupplyTemplate },
  { name: "allosaurus", ...dinoSupplyTemplate },
  { name: "dilophosaurus", ...dinoSupplyTemplate },
  { name: "tsintaosaurus", ...dinoSupplyTemplate },
  { name: "iguanodon", ...dinoSupplyTemplate },
  { name: "isanosaurus", ...dinoSupplyTemplate },
  { name: "silvisaurus", ...dinoSupplyTemplate },
  { name: "diplodocus", ...dinoSupplyTemplate },
].sort((a, b) => a.name.localeCompare(b.name));

export const dinosGen2 = [
  { name: "Liopleurodon", ...dinoSupplyTemplate },
  { name: "Dacosaurus", ...dinoSupplyTemplate },
  {
    name: "Mososaurus",
    ...dinoSupplyTemplate,
  },
  { name: "Plesiosaur", ...dinoSupplyTemplate },
].sort((a, b) => a.name.localeCompare(b.name));
