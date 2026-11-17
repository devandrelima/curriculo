# Currículo interativo — André de Lima Alves

Portfólio/currículo interativo voltado a **AI Builder, desenvolvimento assistido por IA, dados e automações**.

Baseado no projeto open source [Interactive Resume Template](https://github.com/clementbouly/interactive-resume-template), criado por Clement Bouly (licença MIT). O código original e suas atribuições são preservados em [LICENSE](LICENSE).

## Tecnologias
React 19, TypeScript, Vite, Tailwind CSS v4 e Framer Motion. Conteúdo em português e inglês, modo claro/escuro, experiências expansíveis e versão pronta para impressão.

## Como executar
```bash
npm ci
npm run dev
```

Para compilar:
```bash
npm run lint
npm run build
```

## Como salvar o currículo em PDF
Abra a página e clique em **Salvar em PDF**. O site usa uma **versão própria de impressão em uma única folha A4**, com colunas compactas, experiências, projetos, formação e foto. Na janela de impressão selecione **Salvar como PDF**, A4, escala 100%, margens padrão do CSS, sem cabeçalhos/rodapés e habilite os gráficos de fundo para preservar o estilo. Se editar o conteúdo e acrescentar muitas informações, confira a prévia antes de salvar. Não é necessário serviço externo.

## Sua foto

Coloque uma foto **sua** em `public/images/foto.jpg` (o diretório já existe). Formatos suportados: `.jpg`, `.jpeg`, `.png` e `.webp`; recomendamos foto quadrada, de preferência 600×600 px ou maior, mostrando rosto e ombros. A imagem será detectada automaticamente na próxima compilação, no site e no PDF. Não precisa alterar o TypeScript.

Até você enviar a foto, a página e o PDF apresentam as iniciais **AA**, sem utilizar a foto de outra pessoa. Como o repositório é público, a foto também será pública.

Para adicionar pela interface do GitHub: entre em `public/images/`, escolha **Add file → Upload files**, envie `foto.jpg` e confirme o commit. O GitHub Actions fará a nova publicação quando Pages estiver ativado.

## Onde editar
- [src/data/resume-config.ts](src/data/resume-config.ts) — conteúdo profissional, contatos e idiomas
- [src/globals.css](src/globals.css) — ajustes visuais e impressão
- [src/components/Resume/PdfDownload.tsx](src/components/Resume/PdfDownload.tsx) — comando de impressão

## Publicação
A ação [Deploy to GitHub Pages](.github/workflows/deploy.yml) compila e publica o site após push em `main`. Na configuração do repositório, selecione **Settings → Pages → Source: GitHub Actions**.

O endereço esperado, após ativar o Pages, é:
https://devandrelima.github.io/curriculo/

## Transparência
Descrições referem-se ao trabalho documentado e a projetos públicos. Não há números de impacto profissional inventados. O projeto CaixaFuturo usa dados fictícios de demonstração. Apenas dados de contato profissional foram incluídos.

## Créditos
MIT License, Copyright (c) 2026 Clement Bouly — ver [LICENSE](LICENSE). A adaptação e o conteúdo do currículo pertencem ao mantenedor deste repositório.