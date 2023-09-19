// Exporta um objeto chamado 'metadata' com informações sobre o projeto.
export const metadata = {
  title: 'Register users', // Define o título do projeto como 'Register users'.
  description: 'Project for class PTAC', // Define uma descrição do projeto.
}

// Exporta uma função chamada 'RootLayout' que recebe um argumento 'children'.
export default function RootLayout({ children }) {
  return (
    // Cria uma estrutura HTML com a linguagem definida como 'pt-br'.
    <html lang="pt-br">
      <body>{children}</body> {/* Renderiza o conteúdo passado como 'children'. */}
    </html>
  )
}
