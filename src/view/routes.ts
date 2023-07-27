import calculator_tool from './calculator-tool.vue';
import hex_editor from './hex-editor.vue';
import unicode_tool from './unicode-tool.vue';

export default [
    {
        path: '/calc',
        name: 'Calculator',
        component: calculator_tool,
    },
    {
        path: '/hex',
        name: 'Hex Editor',
        component: hex_editor,
    },
    {
        path: '/unicode',
        name: 'Unicode',
        component: unicode_tool,
    },
];
