
  # B2B Website for CONVEY

  This is a code bundle for B2B Website for CONVEY. The original project is available at https://www.figma.com/design/D8yDEHu7JtrOnvuhyPUUN4/B2B-Website-for-CONVEY.

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.
  
## Netlify Forms

The contact inquiry form submits to Netlify Forms as `convey-inquiry`.
`index.html` contains the static form definition Netlify scans during deployment;
keep its field names in sync with `src/app/views/Contact.tsx`.

Enable form detection in the Netlify site's Forms settings, then deploy this
project. Submit a test inquiry on the deployed site and confirm it appears in
Netlify's Forms dashboard. Configure submission email notifications there if
needed. The plain Vite development server does not process Netlify submissions.
