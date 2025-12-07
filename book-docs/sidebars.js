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
        'chapters/robot-anatomy/index',
        'chapters/control-systems/index',
        'chapters/distributed-robot-systems/index', // New
        'chapters/system-architecture-for-ai/index', // New
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
        'chapters/computer-vision/index',
        'chapters/machine-learning-robotics/index',
        'chapters/audio-signal-processing/index', // New
        'chapters/speech-recognition-for-hri/index', // New
        'chapters/sensor-fusion/index', // New
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
        'chapters/path-planning/index',
        'chapters/locomotion/index',
        'chapters/robot-task-planning/index', // New
        'chapters/motion-control/index', // New
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
        'chapters/robot-safety/index',
        'chapters/natural-language-processing/index',
        'chapters/llms-in-hri/index', // New
        'chapters/context-aware-interaction/index', // New
        'chapters/ui-ux-for-robotics/index', // New
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
        'chapters/exoskeletons-prosthetics/index',
        'chapters/swarm-robotics/index',
        'chapters/generative-ai-for-robotics/index', // New
        'chapters/robot-ethics-and-safety/index', // New
      ],
    },
  ],
};

export default sidebars;
