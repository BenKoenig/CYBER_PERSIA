# Cyber Persia

**EN**

Cyber Persia is an upcoming single-player fighting game. It is based on the Unreal engine and will include one character and nine weapons in the first alpha version. The Alpha will be released in Februaryay of 2023aThe Alpha will be released in February 2023. This is a group project at SAE Institute Vienna.

**DE**

Cyber Persia ist ein kommendes Einzelspieler-Kampfspiel. Es basiert auf der Unreal-Engine und wird in der ersten Alpha-Version einen Charakter und neun Waffen enthalten. Die Alpha-Version wird im Februar 2023 veröffentlicht werden. Dies ist ein Gruppenprojekt am SAE Institute Wien.

## Tech Stack

 - [Next.js](https://nextjs.org/)
 - [Laravel](https://laravel.com/)
 - [Tailwind](https://tailwindcss.com/)
 - [Three.js](https://threejs.org/)
 - [Stripe](https://stripe.com)
 - [Vercel](https://vercel.com/)
 - [Laravel Forge](https://forge.laravel.com/)
 - [Hetzner](https://www.hetzner.com/)

## Setup
### Clone Project
```
git clone https://github.com/BenKoenig/CYBER_PERSIA.git
```

### Setup Next Project
```
cd next_cyberpersia
npm i
mv .env.example .env.local
npm run dev
```

### Setup Laravel Project
```
cd laravel_cyberpersia (or cd ../laravel_cyberpersia)
composer i
mv .env.example .env
php artisan migrate
php artisan key:generate
php artisan db:seed
php artisan serve
```
