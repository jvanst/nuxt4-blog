<div id="top"></div>

<br />
<div align="center">
  <h3 align="center">Nuxt4 Blog</h3>

  <p align="center">
     A minimal blog built with Nuxt4, deployed on Cloudflare Workers.
  </p>
</div>

<!-- ABOUT THE PROJECT -->
## About The Project

Figured it was that time again, time to re-engineer my personal space on the internet. I wanted to convert my static 'about me' page, into a blog with dynamic content. Nuxt v4 stood out because its underlying nitro engine supports Worker based deployments. This was exciting because Cloudflare workers 'free' tier is practically unlimited. Now no money shall be shelled out for those few people that stop by my blog at https://jamesvan.ca.

My hope is this will inspire others to use Nuxt3 with Cloudflare workers, as my experience has been very enjoyable thus far.

### Built With

* [Nuxt4](https://nuxt.com)
* [Tailwind](https://tailwindcss.com)
* [Cloudflare Workers](https://workers.cloudflare.com)


<!-- GETTING STARTED -->
## Getting Started

### Installation

1. Clone the repo
   ```sh
   git clone git@github.com:jvanst/nuxt3-blog.git
   ```
4. Install dependencies
   ```sh
   pnpm install
   ```
2. Start the application
   ```sh
   pnpm dev
   ```
   
 ### Production & Deployment
 
 Assuming deploying to CF workers:
 
 1. Build
 ```
npx nuxi build
 ```
 
 2. Deploy with [wrangler](https://github.com/cloudflare/wrangler)
 ```
npx wrangler deploy
 ```

<p align="right">(<a href="#top">back to top</a>)</p>

