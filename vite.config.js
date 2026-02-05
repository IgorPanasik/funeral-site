import { resolve } from 'path';
import { defineConfig } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';
import { VitePWA } from 'vite-plugin-pwa';
import sitemap from 'vite-plugin-sitemap';

export default defineConfig({
	base: '',
	build: {
		outDir: 'dist',
		emptyOutDir: true,
		rollupOptions: {
			input: {
				main: resolve(__dirname, 'index.html'),
				privacy: resolve(__dirname, 'privacy.html'),
			},
		},
	},
	css: { postcss: './postcss.config.cjs' },
	plugins: [
		VitePWA({
			registerType: 'autoUpdate',
			includeAssets: ['favicon.ico', 'robots.txt'],
			manifest: {
				name: 'Ритуальное бюро | Астра',
				short_name: 'Астра',
				description: 'Ритуальные услуги в Минске',
				theme_color: '#000000',
				background_color: '#ffffff',
				display: 'standalone',
				icons: [
					{
						src: 'android-chrome-192x192.png',
						sizes: '192x192',
						type: 'image/png',
					},
					{
						src: 'android-chrome-512x512.png',
						sizes: '512x512',
						type: 'image/png',
					},
				],
			},
		}),

		createHtmlPlugin({
			inject: {
				data: {
					title:
						'Ритуальные услуги в Минске | Похоронное бюро круглосуточное | Астра',
					description:
						'Заказать ритуальные услуги в похоронном бюро «Астра» в Минске и Минском р-не ⭐ Более 10 лет организуем похороны в счёт государственного пособия на погребения ⭐ Круглосуточный вызов агента по телефону +375 (29) 173-17-93 ☎️',
					ogImage: 'preview.jpg',
					canonical: 'https://funeral.by/',
				},
			},
		}),

		sitemap({
			hostname: 'https://funeral.by',
			dynamicRoutes: ['/privacy.html'],
		}),
	],
});
