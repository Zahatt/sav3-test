import createTranslation from '../create-translation'

const translation = createTranslation({
  // profile
  Follow: () => 'Seguir',
  Unfollow: () => 'Deixar de seguir',
  'Edit profile': () => 'Editar perfil',
  'Display name': () => 'Nome de exibição',
  Description: () => 'Descrição',
  'Thumbnail URL': () => 'Miniatura URL',
  'Banner URL': () => 'Banner URL',

  // menu
  Home: () => 'Início',
  Profile: () => 'Perfil',
  Search: () => 'Pesquisar',
  'Search user ID': () => 'Pesquisar ID do usuário',
  Peers: () => 'Pares',
  'Connected peers posts': () => 'Postagens de pares conectados',
  Stats: () => 'Status',
  'Connected peers stats': () => 'Status de pares conectados',
  'Connecting to peers': () => 'Conectando aos pares',
  Following: () => 'Seguindo',
  'Not following anyone': () => 'Não está seguindo ninguém',
  Export: () => 'Exportar',
  Import: () => 'Importar',
  Feed: () => 'Feed',

  // post
  'Uncensorable content': () => 'Conteúdo incensurável',
  Post: () => 'Postar',
  'Copied to clipboard': () => 'Copiado para área de transferência',
  Share: () => 'Compartilhar',

  // global
  'URL expired': () => 'URL expirada'
})

export default translation
