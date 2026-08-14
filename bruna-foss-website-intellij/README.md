# Bruna Foss — Official Website

Responsive artist information portal built with:

- Java 17
- Javalin
- Maven
- HTML
- CSS
- JavaScript

## Run in IntelliJ

1. Open this folder as a Maven project.
2. Wait for Maven to download the dependencies.
3. Open `src/main/java/com/brunafoss/Main.java`.
4. Run `Main`.
5. Open:

http://localhost:7070

## Where to edit the website

### Artist information
`src/main/resources/public/index.html`

### Songs
`src/main/resources/public/js/script.js`

Look for:

```javascript
const tracks = [
```

Each song has:

- id
- title
- duration
- type
- Spotify URL
- YouTube URL
- image
- lyrics
- meaning

### Images

Put artist and song images inside:

`src/main/resources/public/images/`

Then reference them from JavaScript, for example:

```javascript
image: "/images/americana.jpg"
```

### Colors

The main colors are controlled at the top of:

`src/main/resources/public/css/style.css`

The current palette uses navy blue, dark green and several shades between them.

## Current songs

The starter version contains:

- Não Volto Mais
- Don't Change Your Mind
- Americana

Durations and external links are intentionally left blank until the correct Spotify/YouTube information is added.

## Future additions

- Instagram
- TikTok
- YouTube
- Spotify artist profile
- Real artist photography
- EP artwork
- Complete EP tracklist
- Lyrics
- Song meanings
- Spotify and YouTube links
