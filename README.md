# LavaeSecaExpresSP — Site Institucional

> Site institucional de assistência técnica especializada em máquinas lava e seca, desenvolvido com React, TypeScript e Vite.

---

## Sobre o projeto

O **LavaeSecaExpresSP** é uma landing page moderna e responsiva para a empresa de assistência técnica **LavaTec**, sediada em Osasco - SP. O site apresenta os serviços, diferenciais e facilita o contato direto dos clientes via WhatsApp.

O formulário de contato gera automaticamente uma mensagem formatada e abre o WhatsApp com os dados preenchidos, agilizando o agendamento de visitas técnicas.

---

## Funcionalidades

- **Hero section** com chamada direta para agendamento via WhatsApp
- **Seção de serviços** com 6 categorias de atendimento, cada uma com link direto para o WhatsApp
- **Sobre a empresa** com estatísticas destacadas (10+ anos, 1.200+ clientes, 4.9 avaliação)
- **Como funciona** — processo em 4 etapas ilustradas
- **Formulário de contato** que monta e envia a mensagem automaticamente via WhatsApp
- **Botão flutuante** do WhatsApp disponível em todas as páginas
- **Design totalmente responsivo** para mobile, tablet e desktop
- **Animações e micro-interações** para melhor experiência do usuário

---

## Serviços apresentados

| Serviço | Descrição |
|---|---|
| Manutenção corretiva | Diagnóstico e reparo em qualquer marca |
| Vazamentos e bombas | Correção de vazamentos, troca de bomba e mangueiras |
| Placa eletrônica | Conserto e substituição de placas e sensores |
| Sistema de secagem | Reparo em aquecimento, resistências e ventilação |
| Tambor e rolamentos | Troca de rolamentos, retentores e correias |
| Manutenção preventiva | Limpeza interna e verificação completa |

---

## Stack tecnológica

| Tecnologia | Versão | Função |
|---|---|---|
| [React](https://react.dev/) | 18 | Biblioteca de UI |
| [TypeScript](https://www.typescriptlang.org/) | 5 | Tipagem estática |
| [Vite](https://vitejs.dev/) | 5 | Build tool e dev server |
| [Tailwind CSS](https://tailwindcss.com/) | 3 | Estilização utilitária |
| [shadcn/ui](https://ui.shadcn.com/) | — | Componentes de UI acessíveis (Radix UI) |
| [React Router DOM](https://reactrouter.com/) | 6 | Roteamento |
| [Lucide React](https://lucide.dev/) | — | Ícones |
| [Sonner](https://sonner.emilkowal.ski/) | — | Notificações toast |
| [React Hook Form](https://react-hook-form.com/) | 7 | Gerenciamento de formulários |
| [Zod](https://zod.dev/) | 3 | Validação de schemas |
| [Vitest](https://vitest.dev/) | — | Testes unitários |

---

## Estrutura do projeto

```
lavaesecaexpressp/
├── public/
│   ├── favicon.ico
│   └── robots.txt
├── src/
│   ├── assets/
│   │   └── hero-tecnico.jpg
│   ├── components/
│   │   ├── ui/                  # Componentes shadcn/ui
│   │   ├── About.tsx            # Seção "Sobre a LavaTec"
│   │   ├── Contact.tsx          # Formulário de contato + WhatsApp
│   │   ├── Footer.tsx           # Rodapé
│   │   ├── Hero.tsx             # Seção principal (hero)
│   │   ├── Navbar.tsx           # Barra de navegação
│   │   ├── NavLink.tsx          # Link de navegação customizado
│   │   ├── Process.tsx          # Seção "Como funciona"
│   │   ├── Services.tsx         # Seção de serviços
│   │   └── WhatsappFloat.tsx    # Botão flutuante do WhatsApp
│   ├── hooks/
│   │   └── use-mobile.tsx
│   ├── lib/
│   │   └── utils.ts
│   ├── pages/
│   │   ├── Index.tsx            # Página principal
│   │   └── NotFound.tsx         # Página 404
│   ├── App.tsx
│   ├── App.css
│   ├── index.css
│   └── main.tsx
├── index.html
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── vite.config.ts
```

---

## Como rodar localmente

### Pré-requisitos

- [Node.js](https://nodejs.org/) v18 ou superior
- [npm](https://www.npmjs.com/) ou [bun](https://bun.sh/)

### Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/lavaesecaexpressp.git

# Acesse a pasta do projeto
cd lavaesecaexpressp

# Instale as dependências
npm install
```

### Desenvolvimento

```bash
npm run dev
```

Acesse [http://localhost:5173](http://localhost:5173) no navegador.

### Build para produção

```bash
npm run build
```

Os arquivos serão gerados na pasta `dist/`.

### Preview da build

```bash
npm run preview
```

### Testes

```bash
# Rodar os testes uma vez
npm run test

# Rodar em modo watch
npm run test:watch
```

### Lint

```bash
npm run lint
```

---

## Contato da empresa

| Canal | Informação |
|---|---|
| WhatsApp / Telefone | (11) 95320-4114 |
| E-mail | Lavaesecaexpressp@gmail.com |
| Localização | Osasco - SP (atende todo o estado de SP) |

---

## Licença

Este projeto é de uso privado. Todos os direitos reservados à **LavaeSecaExpresSP**.
