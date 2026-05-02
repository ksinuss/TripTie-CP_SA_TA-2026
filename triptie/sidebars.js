// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
module.exports = {
  docs: [
    'index',
    
    {
      type: 'category',
      label: 'Введение',
      items: [
        'introduction/index',
        'introduction/stakeholders',
        'introduction/scope',
      ],
    },
    
    {
      type: 'category',
      label: 'Требования',
      items: [
        'requirements/functional',
        'requirements/non-functional',
      ],
    },
    
    {
      type: 'category',
      label: 'Архитектура',
      items: [
        'architecture/arch',
        'architecture/data-model',
        'architecture/integrations',
      ],
    },
    
    {
      type: 'category',
      label: 'API',
      items: [
        'api/index',
        'api/api-reference',
        'api/websocket',
      ],
    },
    
    {
      type: 'category',
      label: 'Алгоритмы',
      items: [
        'algorithms/route-generation',
      ],
    },
    
    {
      type: 'category',
      label: 'Приложение',
      items: [
        'appendix/glossary',
      ],
    },
  ],
};