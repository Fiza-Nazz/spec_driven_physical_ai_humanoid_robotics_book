// @ts-check

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Foundations & Concepts',
      link: {
        type: 'generated-index',
        title: 'Foundations & Core Concepts',
        description: 'Understand the fundamental principles of AI, Machine Learning, and Robotics.',
        slug: '/category/foundations',
      },
      items: [
        'chapters/intro/index',
        'chapters/kinematics/index',
        'chapters/robot-anatomy/index', // New chapter
        'chapters/control-systems/index', // New chapter
      ],
    },
    {
      type: 'category',
      label: 'Robot Perception & Intelligence',
      link: {
        type: 'generated-index',
        title: 'Robot Perception & Intelligence',
        description: 'Explore how robots sense their environment and process information.',
        slug: '/category/perception',
      },
      items: [
        'chapters/sensing-perception/index',
        'chapters/computer-vision/index', // New chapter
        'chapters/machine-learning-robotics/index', // New chapter
      ],
    },
    {
      type: 'category',
      label: 'Control & Autonomous Navigation',
      link: {
        type: 'generated-index',
        title: 'Control & Autonomous Navigation',
        description: 'Master the algorithms and techniques for robot control and movement.',
        slug: '/category/control-navigation',
      },
      items: [
        'chapters/control-navigation/index',
        'chapters/path-planning/index', // New chapter
        'chapters/locomotion/index', // New chapter
      ],
    },
    {
      type: 'category',
      label: 'Human-Robot Interaction',
      link: {
        type: 'generated-index',
        title: 'Human-Robot Interaction',
        description: 'Design intuitive and safe interactions between humans and humanoid robots.',
        slug: '/category/hri',
      },
      items: [
        'chapters/hri/index',
        'chapters/robot-safety/index', // New chapter
        'chapters/natural-language-processing/index', // New chapter
      ],
    },
    {
      type: 'category',
      label: 'Advanced Topics & Future Trends',
      link: {
        type: 'generated-index',
        title: 'Advanced Topics & Future Trends',
        description: 'Dive into cutting-edge research and the future of AI Robotics.',
        slug: '/category/advanced',
      },
      items: [
        'chapters/advanced-future/index',
        'chapters/exoskeletons-prosthetics/index', // New chapter
        'chapters/swarm-robotics/index', // New chapter
      ],
    },
  ],
};

export default sidebars;
