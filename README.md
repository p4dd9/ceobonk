# Ceobonk

A client-side twitch extension to bonk

# Summary

Add a playful twist to your Twitch stream with this hammer-tastic extension. Give your viewers a satisfying bonk on the screen!

# Description

Looking for a way to add some excitement to your Twitch stream? Look no further than this hammer-tastic extension! With a simple click, you bring a bonk animation to your broadcast, giving your viewers a fun and interactive way to engage with your content. So why wait? Start hammering away and give your audience something to smile about!

# Viewer Summary

Give your Twitch experience a boost with this hammer-tastic extension! Click for a satisfying bonk animation and join in on the fun.

# Contributors

Developer and extension publisher [p4dd9](https://twitter.com/p4dd9)  
Animal crossing addict, leader of the Bluebear cult and initiator [ceomg](https://www.twitch.tv/ceomg)  
Producer "DJ Loxias" aka [Surface Division](https://www.instagram.com/surfacedivision/)

# Twitch Guidelines

https://dev.twitch.tv/docs/extensions/guidelines-and-policies/

# License

All media assets, such as images, videos and audio recordings, are protected by copyright laws (inlcuding MIT licensed software projects). This means that they cannot be reused or reproduced without the permission of the author or copyright owner. If you want to use someone else's media asset, you need to obtain their permission first. This may involve contacting the author directly or obtaining a license from a stock media provider. It's important to respect copyright laws and the rights of content creators by obtaining permission before reusing any media assets.

## Hammer

`hammer.png`

[Sketchcee](https://twitter.com/Sketchcee)

`starburst inlined svg`  
[ceomg](https://www.twitch.tv/ceomg)

## SFX

`bonk.wav`

[Surface Division](https://www.instagram.com/surfacedivision/)

## Icons

`volumedown.svg`  
`volumeup.svg`

https://ionic.io/ionicons/  
https://github.com/ionic-team/ionicons/blob/main/LICENSE

## Changelog

#### v0.0.3

- updated contact and support email
- updated author name

#### v0.0.1

- added hammer image with css animation to rotate
- added hammer charging when holding down left mouse
- spawn bonk impact effect and play sound per click
- added audio ui using localstorage to store volume
- shake extension ui and hammer when bonking

## How to use

- left click to bonk (plays sound and rotates the hammer)
- hold left mouse to charge hammer and create a bigger impact effect (shakes extension overlay and hammer)
- hovering over the left area of the extension window shows audio ui
- audio can be increased via dragging the slider or clicking the icons (value stored in localstorage and loaded on page refresh)
