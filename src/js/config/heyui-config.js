import dictConfig from './dict-config';
import autocompleteConfig from './autocomplete-config';
import treeConfig from './tree-config';

const heyuiConfig = () => {
  
  dictConfig();
  HeyUI.config('dict.keyName', "key");
  HeyUI.config('dict.titleName', "title");
  // HeyUI.config('page.small', true);
  HeyUI.config('page.sizes', [12]);

  let autocomplete = autocompleteConfig();
  HeyUI.config("autocomplete.configs", autocomplete);

  let tree = treeConfig();
  HeyUI.config("tree.configs", tree);

  HeyUI.config('menu', {
    titleName: 'title',
    keyName: 'key',
    childrenName: 'children'
  });

};

export default heyuiConfig;
