import React from "react";
import Particles from "react-tsparticles";
import { loadStarsPreset } from "tsparticles-preset-stars";

export class ParticlesBackground extends React.PureComponent {
  // this customizes the component tsParticles installation
  async customInit(engine) {
    // this adds the preset to tsParticles, you can safely use the
    await loadStarsPreset(engine);
  }

  render() {
    const options = {
      preset: "stars",
      fullScreen: { enable: false },
      background: {
        color: "rgb(122,9,173)",
        gradient:
          "linear-gradient(61deg, rgba(122,9,173,1) 0%, rgba(98,10,117,1) 40%, rgba(186,11,141,1) 100%)",
      },
      particles: {
        move: {
          direction: "",
        },
      },
    };

    return <Particles options={options} init={this.customInit} />;
  }
}

export default ParticlesBackground;
