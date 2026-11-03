# Beme Beauty Partner Hub

Create a brand-new project called beme Partners. Recreate the HTML page below EXACTLY as the home page of this site. This is a pixel-perfect conversion, not a redesign.

Rules:

- Do not change any text, colours, font sizes, font weights, spacing, padding, margins, border radius, shadows, layout or section order.

- Keep every inline style value exactly as written. Converting to React/JSX style objects is fine, but the values must stay the same. Do not swap them for "similar" Tailwind classes.

- Font: Raleway from Google Fonts, weights 300–800, exactly as in the <link> tag.

- Save the attached images in /public/images/ with these exact filenames and use them where the HTML references them: app-home-featured.jpg, app-discover-artists.jpg, artist-profile-phone.png, beme-logo.png, founder-jay.jpg, phone-in-hand.jpg (the attached beme-landing.zip contains these image files).

- Keep the mobile behaviour: the menu links hide under 760px and the menu (hamburger) button appears; the header button hides under 480px.

- Keep the FAQ as native <details> accordions.

- Do not add any new sections, icons, animations or images.

Here is the HTML:

<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>beme for partners</title>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700;800&amp;display=swap">
<style>
body{margin:0;background:#FBF8F9}
a{color:#1E1E1E}a:hover{color:#C9503F}
input:focus-visible,select:focus-visible,button:focus-visible,a:focus-visible,summary:focus-visible{outline:2px solid #E46454;outline-offset:3px}
summary{list-style:none;cursor:pointer}summary::-webkit-details-marker{display:none}
details[open] .chev{transform:rotate(45deg)}
.mobilemenu{display:none}
.mobilemenu summary span{display:block;width:20px;height:2px;background:#1E1E1E;border-radius:2px}
@media (max-width: 760px){.navlinks{display:none !important}.mobilemenu{display:block}}
@media (max-width: 480px){.headcta{display:none !important}}
</style>
<style>[hidden]{display:none!important}</style>
</head>
<body>
<div id="top" style="font-family: Raleway, ui-sans-serif, system-ui, sans-serif; font-variant-numeric: lining-nums; color: #5A5658; background: #FBF8F9; font-size: 17px; line-height: 1.65; overflow-x: hidden">

<!-- HEADER -->
<header style="max-width: 1200px; margin: 0 auto; padding: 0 24px">
  <div style="position: relative; height: 92px; display: flex; gap: 24px; align-items: center; justify-content: space-between; border-bottom: 1px solid #ECE7E9">
    <a href="#top" style="display: flex; align-items: center; text-decoration: none">
      <img src="images/beme-logo.png" alt="beme" style="height: 38px; width: auto; display: block">
    </a>
    <nav class="navlinks" style="display: flex; gap: 48px; align-items: stretch; height: 100%; font-size: 17px; font-weight: 500">
      <a href="#why" style="text-decoration: none; display: flex; align-items: center; color: #5A5658">Why beme</a>
      <a href="#perks" style="text-decoration: none; display: flex; align-items: center; color: #5A5658">Early Partners</a>
      <a href="#community" style="text-decoration: none; display: flex; align-items: center; color: #5A5658">Community</a>
      <a href="#artists" style="text-decoration: none; display: flex; align-items: center; color: #5A5658">Artists</a>
      <a href="#faq" style="text-decoration: none; display: flex; align-items: center; color: #5A5658">FAQ</a>
    </nav>
    <div style="display: flex; gap: 12px; align-items: center">
      <a href="#apply" class="headcta" style="text-decoration: none; background: #E46454; color: #FFFFFF; font-weight: 700; font-size: 15px; padding: 11px 22px; border-radius: 999px; white-space: nowrap">Join as an Early Partner</a>
      <details class="mobilemenu">
        <summary aria-label="Open menu" style="width: 44px; height: 44px; border-radius: 12px; border: 1px solid #E5DFE1; background: #FFFFFF; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 5px"><span></span><span></span><span></span></summary>
        <nav style="position: absolute; right: 0; top: 84px; z-index: 10; width: min(280px, 100%); background: #FFFFFF; border: 1px solid #ECE7E9; border-radius: 20px; padding: 12px; box-shadow: 0 24px 48px -24px rgba(60,30,30,0.35); display: flex; flex-direction: column; font-size: 17px; font-weight: 600">
          <a href="#why" style="text-decoration: none; padding: 12px 14px; border-radius: 12px">Why beme</a>
          <a href="#perks" style="text-decoration: none; padding: 12px 14px; border-radius: 12px">Early Partners</a>
          <a href="#community" style="text-decoration: none; padding: 12px 14px; border-radius: 12px">Community</a>
          <a href="#artists" style="text-decoration: none; padding: 12px 14px; border-radius: 12px">Artists</a>
          <a href="#faq" style="text-decoration: none; padding: 12px 14px; border-radius: 12px">FAQ</a>
          <a href="#apply" style="text-decoration: none; margin-top: 8px; text-align: center; background: #E46454; color: #FFFFFF; font-weight: 700; padding: 13px 14px; border-radius: 999px">Join as an Early Partner</a>
        </nav>
      </details>
    </div>
  </div>
</header>

<!-- HERO -->
<section style="max-width: 1200px; margin: 0 auto; padding: 0 24px; display: flex; flex-wrap: wrap; gap: 40px; align-items: center">
  <div style="flex: 1 1 520px; min-width: 0; display: flex; flex-direction: column; padding-block: 96px 0">
    <h1 style="margin: 0; font-size: clamp(40px, 4.8vw, 60px); line-height: 1.15; letter-spacing: -0.02em; color: #1E1E1E">
      <span style="display: block; font-weight: 700">Vancouver's Beauty</span>
      <span style="display: block; font-weight: 400">Discovery &amp; Booking Platform.</span>
    </h1>
    <p style="margin: 28px 0 0; font-size: 20px; font-weight: 400; color: #4A4648">Built by an aesthetician. Designed for modern beauty professionals.</p>
    <div style="display: flex; flex-wrap: wrap; gap: 16px 24px; align-items: center; margin-top: 40px">
      <a href="#apply" style="text-decoration: none; background: #E46454; color: #FFFFFF; font-weight: 700; font-size: 18px; padding: 17px 38px; border-radius: 999px; box-shadow: 0 16px 30px -12px rgba(228,100,84,0.6)">Join as an Early Partner</a>
      <span style="font-size: 14px; font-weight: 500; color: #8A8486">For salons, clinics, medspas &amp; independent artists</span>
    </div>
    <div style="display: flex; flex-wrap: wrap; gap: 12px 24px; align-items: center; margin-top: 120px; padding-block: 24px 32px; border-top: 1px solid #ECE7E9; font-size: 15px; font-weight: 500; color: #5A5658">
      <span>Vancouver exclusive launch</span>
      <span style="width: 1px; height: 18px; background: #D9D3D5" aria-hidden="true"></span>
      <span>Limited early partners</span>
      <span style="width: 1px; height: 18px; background: #D9D3D5" aria-hidden="true"></span>
      <span>Coming soon to the App Store</span>
    </div>
  </div>
  <div style="flex: 1 1 420px; min-width: 0; display: flex; justify-content: center">
    <div style="position: relative; width: 100%; max-width: 520px; aspect-ratio: 1 / 1.08">
      <div style="position: absolute; right: 2%; top: 0; width: 50%; transform: rotate(6deg); background: #1E1E1E; padding: 2.6%; border-radius: 44px; box-shadow: 0 40px 60px -30px rgba(60,30,30,0.45)">
        <img src="images/app-discover-artists.jpg" alt="beme Discover Beauty Artists screen listing independent artists with services, prices and booking buttons" style="width: 100%; height: auto; display: block; border-radius: 36px">
      </div>
      <div style="position: absolute; left: 4%; bottom: 0; width: 50%; transform: rotate(-6deg); background: #1E1E1E; padding: 2.6%; border-radius: 44px; box-shadow: 0 50px 70px -30px rgba(60,30,30,0.5)">
        <img src="images/app-home-featured.jpg" alt="beme home screen showing popular beauty services with prices and featured professionals" style="width: 100%; height: auto; display: block; border-radius: 36px">
      </div>
    </div>
  </div>
</section>

<!-- WHY BEME (coral band) -->
<section id="why" style="background: #F5E6E2; color: #1E1E1E; margin-top: 64px">
  <div style="max-width: 1200px; margin: 0 auto; padding: 0 24px; display: flex; flex-wrap: wrap; gap: 64px; align-items: center">
    <div style="flex: 0 1 440px; min-width: 0; align-self: flex-end; margin: 0 auto">
      <img src="images/phone-in-hand.jpg" alt="A hand holding a phone showing the beme home screen with top salons and top services" style="width: 100%; height: auto; display: block">
    </div>
    <div style="flex: 1 1 480px; min-width: 0; display: flex; flex-direction: column; gap: 40px; padding-block: 112px">
      <h2 style="margin: 0; font-size: clamp(34px, 3.8vw, 48px); line-height: 1.15; letter-spacing: -0.02em">
        <span style="display: block; font-weight: 700">Not another</span>
        <span style="display: block; font-weight: 400">booking app.</span>
      </h2>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 32px 40px">
        <div style="display: flex; flex-direction: column; gap: 6px; border-top: 1px solid rgba(30,30,30,0.14); padding-top: 18px"><strong style="font-size: 18px; font-weight: 700">Every treatment explained</strong><span style="font-size: 16px; color: #5A5658">Price, products, results, downtime and aftercare, before clients book.</span></div>
        <div style="display: flex; flex-direction: column; gap: 6px; border-top: 1px solid rgba(30,30,30,0.14); padding-top: 18px"><strong style="font-size: 18px; font-weight: 700">Reviews that show real skill</strong><span style="font-size: 16px; color: #5A5658">Each treatment rated on results, comfort, professionalism and safety.</span></div>
        <div style="display: flex; flex-direction: column; gap: 6px; border-top: 1px solid rgba(30,30,30,0.14); padding-top: 18px"><strong style="font-size: 18px; font-weight: 700">Keep your current software</strong><span style="font-size: 16px; color: #5A5658">beme is an extra channel for new clients. Nothing to switch.</span></div>
        <div style="display: flex; flex-direction: column; gap: 6px; border-top: 1px solid rgba(30,30,30,0.14); padding-top: 18px"><strong style="font-size: 18px; font-weight: 700">Pay only for results</strong><span style="font-size: 16px; color: #5A5658">No monthly fees. Commission only on beme bookings.</span></div>
      </div>
    </div>
  </div>
</section>

<!-- COMMUNITY -->
<section id="community" style="background: #FBF8F9">
  <div style="max-width: 1200px; margin: 0 auto; padding: 136px 24px; display: flex; flex-wrap: wrap; gap: 72px; align-items: center">
    <div style="flex: 1 1 440px; min-width: 0; display: flex; flex-direction: column; gap: 24px">
      <span style="align-self: flex-start; font-size: 15px; font-weight: 600; color: #D24E3E; background: #FCEBE8; padding: 7px 16px; border-radius: 999px">Discussion Board</span>
      <h2 style="margin: 0; font-size: clamp(34px, 3.8vw, 48px); line-height: 1.15; letter-spacing: -0.02em; color: #1E1E1E">
        <span style="display: block; font-weight: 700">More than bookings.</span>
        <span style="display: block; font-weight: 400">A beauty community.</span>
      </h2>
      <p style="margin: 0; max-width: 32em; font-size: 18px">Share your expertise, answer real questions, and connect with clients who want to understand their treatments before they book.</p>
      <div style="display: flex; flex-direction: column; gap: 20px; margin-top: 8px">
        <div style="display: grid; grid-template-columns: 40px minmax(0, 1fr); gap: 14px; align-items: start"><span style="width: 40px; height: 40px; border-radius: 12px; background: #FCEBE8; display: flex; align-items: center; justify-content: center"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E46454" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z"></path></svg></span><div style="display: flex; flex-direction: column; gap: 2px"><strong style="font-size: 17px; font-weight: 700; color: #1E1E1E">Real conversations</strong><span style="font-size: 16px">Honest questions, experiences and recommendations.</span></div></div>
        <div style="display: grid; grid-template-columns: 40px minmax(0, 1fr); gap: 14px; align-items: start"><span style="width: 40px; height: 40px; border-radius: 12px; background: #FCEBE8; display: flex; align-items: center; justify-content: center"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E46454" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z"></path><path d="M9 12l2 2 4-4"></path></svg></span><div style="display: flex; flex-direction: column; gap: 2px"><strong style="font-size: 17px; font-weight: 700; color: #1E1E1E">Professional insights</strong><span style="font-size: 16px">Verified experts share what they know and build trust.</span></div></div>
        <div style="display: grid; grid-template-columns: 40px minmax(0, 1fr); gap: 14px; align-items: start"><span style="width: 40px; height: 40px; border-radius: 12px; background: #FCEBE8; display: flex; align-items: center; justify-content: center"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E46454" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="7"></circle><path d="M20 20l-4-4"></path></svg></span><div style="display: flex; flex-direction: column; gap: 2px"><strong style="font-size: 17px; font-weight: 700; color: #1E1E1E">Community-led discovery</strong><span style="font-size: 16px">Clients find local pros through helpful answers, not just ads.</span></div></div>
      </div>
    </div>

    <div style="flex: 1 1 440px; min-width: 0; background: #F3ECEE; border-radius: 28px; padding: 28px; display: flex; flex-direction: column; gap: 14px; box-sizing: border-box">
      <span style="font-size: 12px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: #8A8486">Preview · example thread</span>
      <div style="background: #FFFFFF; border: 1px solid #ECE7E9; border-radius: 18px; padding: 20px 22px; display: flex; flex-direction: column; gap: 10px">
        <div style="display: flex; gap: 10px; align-items: center"><span style="width: 32px; height: 32px; border-radius: 50%; background: #EDE6E8; flex: none"></span><span style="font-size: 13px; font-weight: 600; color: #8A8486">Client · Mount Pleasant</span><span style="margin-left: auto; font-size: 12px; font-weight: 700; color: #E46454; background: #FCEBE8; padding: 3px 10px; border-radius: 999px">Lashes</span></div>
        <strong style="font-size: 17px; font-weight: 700; color: #1E1E1E; line-height: 1.4">What's the difference between a lash lift and lash extensions?</strong>
        <span style="font-size: 15px">I want something low-maintenance for summer. Which lasts longer?</span>
      </div>
      <div style="background: #FFFFFF; border: 1px solid #F3D3CC; border-radius: 18px; padding: 20px 22px; display: flex; flex-direction: column; gap: 10px; margin-left: 28px">
        <div style="display: flex; flex-wrap: wrap; gap: 8px 10px; align-items: center"><span style="width: 32px; height: 32px; border-radius: 50%; background: #F1E4E1; flex: none"></span><strong style="font-size: 14px; color: #1E1E1E">[Artist name]</strong><span style="display: flex; align-items: center; gap: 4px; font-size: 12px; font-weight: 700; color: #FFFFFF; background: #E46454; padding: 3px 10px; border-radius: 999px"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12l5 5L20 7"></path></svg>Verified lash artist</span></div>
        <span style="font-size: 15px; line-height: 1.6">A lift curls your natural lashes and lasts about 6 to 8 weeks with almost no upkeep. Extensions add length and volume but need fills every 2 to 3 weeks. For low maintenance, a lift is usually the better fit.</span>
        <a href="#artists" style="align-self: flex-start; font-size: 14px; font-weight: 700; color: #E46454; text-decoration: none">View beme profile →</a>
      </div>
      <div style="background: #FFFFFF; border: 1px solid #ECE7E9; border-radius: 18px; padding: 16px 22px; display: flex; gap: 10px; align-items: flex-start; margin-left: 28px">
        <span style="width: 28px; height: 28px; border-radius: 50%; background: #EDE6E8; flex: none"></span>
        <span style="font-size: 15px"><strong style="color: #1E1E1E; font-weight: 700">Client · Yaletown</strong> Got a lift last month and loved it. Zero mornings spent on mascara.</span>
      </div>
    </div>
  </div>
</section>

<!-- ARTISTS -->
<section id="artists" style="background: #FFFFFF; border-bottom: 1px solid #ECE7E9">
<div style="max-width: 1200px; margin: 0 auto; padding: 112px 24px 0; display: flex; flex-wrap: wrap; gap: 64px; align-items: flex-end">
  <div style="flex: 1 1 520px; min-width: 0; display: flex; flex-direction: column; gap: 28px; padding-bottom: 112px; align-self: center">
    <span style="align-self: flex-start; font-size: 15px; font-weight: 600; color: #D24E3E; background: #FCEBE8; padding: 7px 16px; border-radius: 999px">Independent Artist Showcase</span>
    <h2 style="margin: 0; font-weight: 800; font-size: clamp(38px, 4.6vw, 60px); line-height: 1.08; letter-spacing: -0.025em; color: #1E1E1E; text-wrap: balance">Your talent deserves the spotlight.</h2>
    <p style="margin: 0; max-width: 31em; font-size: 19px; line-height: 1.6; color: #4A4648">Whether you work from a salon chair, a private studio or on your own, beme gives you a professional space to showcase your work, explain your services and connect with new clients.</p>
    <div style="display: flex; flex-direction: column; gap: 24px; margin-top: 4px">
      <div style="display: grid; grid-template-columns: 64px minmax(0, 1fr); gap: 20px; align-items: center"><span style="width: 64px; height: 64px; border-radius: 16px; background: #FCEBE8; display: flex; align-items: center; justify-content: center"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#E46454" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="8" r="4"></circle><path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6"></path></svg></span><div style="display: flex; flex-direction: column; gap: 2px"><strong style="font-size: 21px; font-weight: 700; color: #1E1E1E; line-height: 1.3">Your own professional profile</strong><span style="font-size: 16px">Showcase your expertise, experience and unique style.</span></div></div>
      <div style="display: grid; grid-template-columns: 64px minmax(0, 1fr); gap: 20px; align-items: center"><span style="width: 64px; height: 64px; border-radius: 16px; background: #FCEBE8; display: flex; align-items: center; justify-content: center"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#E46454" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3l9 5-9 5-9-5z"></path><path d="M3 13l9 5 9-5"></path></svg></span><div style="display: flex; flex-direction: column; gap: 2px"><strong style="font-size: 21px; font-weight: 700; color: #1E1E1E; line-height: 1.3">Detailed service showcases</strong><span style="font-size: 16px">Go beyond a price list with treatment details, results and aftercare.</span></div></div>
      <div style="display: grid; grid-template-columns: 64px minmax(0, 1fr); gap: 20px; align-items: center"><span style="width: 64px; height: 64px; border-radius: 16px; background: #FCEBE8; display: flex; align-items: center; justify-content: center"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#E46454" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 20v-4M10 20v-8M15 20v-11M20 20V5"></path></svg></span><div style="display: flex; flex-direction: column; gap: 2px"><strong style="font-size: 21px; font-weight: 700; color: #1E1E1E; line-height: 1.3">Get discovered by new clients</strong><span style="font-size: 16px">Be part of Vancouver's beauty and aesthetics community and grow your bookings.</span></div></div>
    </div>
    <a href="#apply" data-pick="artist" style="align-self: flex-start; margin-top: 12px; display: flex; align-items: center; gap: 12px; text-decoration: none; background: #E46454; color: #FFFFFF; font-weight: 700; font-size: 18px; padding: 17px 36px; border-radius: 999px; box-shadow: 0 16px 30px -12px rgba(228,100,84,0.6)">Join as an Early Partner<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"></path></svg></a>
  </div>
  <div style="flex: 0 1 460px; min-width: 0; margin: 0 auto; display: flex; justify-content: center">
    <img src="images/artist-profile-phone.png" alt="Sample beme profile for an independent hair artist, showing rating, location, availability, an about section and specialties" style="width: 100%; max-width: 460px; height: auto; display: block">
  </div>
</div>
</section>

<!-- PERKS -->
<section id="perks" style="background: #FBF8F9">
  <div style="max-width: 1200px; margin: 0 auto; padding: 136px 24px; display: flex; flex-direction: column; gap: 56px">
    <div style="display: flex; flex-wrap: wrap; gap: 16px 48px; align-items: flex-end; justify-content: space-between">
      <h2 style="margin: 0; font-size: clamp(34px, 3.8vw, 48px); line-height: 1.15; letter-spacing: -0.02em; color: #1E1E1E">
        <span style="display: block; font-weight: 700">Early partner perks.</span>
        <span style="display: block; font-weight: 400">Join early, get more.</span>
      </h2>
      <span style="font-size: 16px; font-weight: 500; color: #8A8486">Limited spots while we launch in Vancouver.</span>
    </div>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 20px">
      <div style="background: #1E1E1E; border-radius: 24px; padding: 32px; display: flex; flex-direction: column; gap: 8px; color: #B8B3B5">
        <strong style="font-size: 52px; font-weight: 700; color: #FFFFFF; letter-spacing: -0.02em; line-height: 1.05">10%</strong>
        <strong style="font-size: 18px; font-weight: 700; color: #FFFFFF; margin-top: 16px">Early partner commission</strong>
        <span style="font-size: 15px">On beme bookings only, for a limited time.</span>
      </div>
      <div style="background: #FFFFFF; border: 1px solid #ECE7E9; border-radius: 24px; padding: 32px; display: flex; flex-direction: column; gap: 8px">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#E46454" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"></circle><path d="M8 12h8"></path></svg>
        <strong style="font-size: 18px; font-weight: 700; color: #1E1E1E; margin-top: 36px">No listing or monthly fees</strong>
        <span style="font-size: 15px">Nothing to pay upfront.</span>
      </div>
      <div style="background: #FFFFFF; border: 1px solid #ECE7E9; border-radius: 24px; padding: 32px; display: flex; flex-direction: column; gap: 8px">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#E46454" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 20h4L18.5 9.5a2.1 2.1 0 0 0-4-4L4 16z"></path></svg>
        <strong style="font-size: 18px; font-weight: 700; color: #1E1E1E; margin-top: 36px">Free onboarding</strong>
        <span style="font-size: 15px">We set up your profile and treatment pages with you.</span>
      </div>
      <div style="background: #FFFFFF; border: 1px solid #ECE7E9; border-radius: 24px; padding: 32px; display: flex; flex-direction: column; gap: 8px">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#E46454" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3l2.6 5.4 5.9.9-4.3 4.1 1 5.9L12 16.5 6.8 19.3l1-5.9L3.5 9.3l5.9-.9z"></path></svg>
        <strong style="font-size: 18px; font-weight: 700; color: #1E1E1E; margin-top: 36px">Free spotlight</strong>
        <span style="font-size: 15px">A featured spot on beme at launch.</span>
      </div>
    </div>
  </div>
</section>

<!-- FOUNDER -->
<section style="background: #FFFFFF; border-top: 1px solid #ECE7E9; border-bottom: 1px solid #ECE7E9; margin-bottom: 136px">
<div style="max-width: 1200px; margin: 0 auto; padding: 136px 24px; display: flex; flex-wrap: wrap; gap: 80px; align-items: center">
  <div style="flex: 0 1 380px; min-width: 0; margin: 0 auto">
    <img src="images/founder-jay.jpg" alt="Jay, founder of beme" style="width: 100%; max-width: 100%; aspect-ratio: 4 / 5; object-fit: cover; display: block; border-radius: 28px; background: #F1E4E1">
  </div>
  <div style="flex: 1 1 460px; min-width: 0; display: flex; flex-direction: column; gap: 22px">
    <span style="align-self: flex-start; font-size: 15px; font-weight: 600; color: #D24E3E; background: #FCEBE8; padding: 7px 16px; border-radius: 999px">Our Founder</span>
    <h2 style="margin: 0; font-size: clamp(34px, 3.8vw, 48px); line-height: 1.15; letter-spacing: -0.02em; color: #1E1E1E">
      <span style="display: block; font-weight: 700">You shouldn't have to go viral</span>
      <span style="display: block; font-weight: 400">to get booked.</span>
    </h2>
    <p style="margin: 0; max-width: 34em; font-size: 18px">I'm Jay, an aesthetician who has worked in salons and clinics, and independently with my own clients. I've lived in Europe, Asia and the US, and seen the beauty and aesthetics industry marketed in very different ways.</p>
    <p style="margin: 0; max-width: 34em; font-size: 18px">Here, the work keeps getting better, but the marketing hasn't kept up. Skilled professionals spend hours chasing algorithms and competing on discounts, while clients book without really knowing what they're getting.</p>
    <p style="margin: 0; max-width: 34em; font-size: 18px">beme changes that. Instead of being found for who posts the most, you're found for what you know: clear treatment information, honest reviews and real answers in our community. Marketing built on expertise, not hype.</p>
    <strong style="color: #1E1E1E; font-weight: 700; margin-top: 6px">Jay, founder of beme</strong>
  </div>
</div>
</section>

<!-- APPLY -->
<section id="apply" style="padding: 0 24px 136px">
  <div style="max-width: 1152px; margin: 0 auto; background: #1E1E1E; border-radius: 32px; padding: 72px 56px; display: flex; flex-wrap: wrap; gap: 56px; align-items: center; box-sizing: border-box">
    <div style="flex: 1 1 340px; min-width: 0; display: flex; flex-direction: column; gap: 20px; color: #B8B3B5">
      <h2 style="margin: 0; font-size: clamp(34px, 3.8vw, 48px); line-height: 1.15; letter-spacing: -0.02em; color: #FFFFFF">
        <span style="display: block; font-weight: 700">Join as an</span>
        <span style="display: block; font-weight: 400">early partner.</span>
      </h2>
      <p style="margin: 0; max-width: 26em; font-size: 18px">Tell us a little about your business. I'll reach out personally to get you set up.</p>
    </div>
    <div style="flex: 1 1 460px; min-width: 0; background: #FFFFFF; border-radius: 24px; padding: 36px; box-sizing: border-box">
      <div id="apply-form-wrap">
        <form id="apply-form" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 18px 16px">
          <label for="f-name" style="display: flex; flex-direction: column; gap: 8px; font-size: 13px; font-weight: 700; color: #1E1E1E">Your name<input id="f-name" type="text" required style="font: inherit; font-weight: 500; font-size: 15px; padding: 13px 16px; border: 1px solid #E2DCDE; border-radius: 12px; color: #1E1E1E; background: #FBF8F9; min-width: 0"></label>
          <label for="f-biz" style="display: flex; flex-direction: column; gap: 8px; font-size: 13px; font-weight: 700; color: #1E1E1E">Business or artist name<input id="f-biz" type="text" required style="font: inherit; font-weight: 500; font-size: 15px; padding: 13px 16px; border: 1px solid #E2DCDE; border-radius: 12px; color: #1E1E1E; background: #FBF8F9; min-width: 0"></label>
          <label for="f-type" style="display: flex; flex-direction: column; gap: 8px; font-size: 13px; font-weight: 700; color: #1E1E1E">I am a
            <select id="f-type" style="font: inherit; font-weight: 500; font-size: 15px; padding: 13px 16px; border: 1px solid #E2DCDE; border-radius: 12px; color: #1E1E1E; background: #FBF8F9; min-width: 0">
              <option value="salon">Salon</option>
              <option value="clinic">Aesthetic clinic</option>
              <option value="medspa">Medspa</option>
              <option value="artist">Independent artist</option>
            </select>
          </label>
          <label for="f-ig" style="display: flex; flex-direction: column; gap: 8px; font-size: 13px; font-weight: 700; color: #1E1E1E">Instagram<input id="f-ig" type="text" placeholder="@yourhandle" style="font: inherit; font-weight: 500; font-size: 15px; padding: 13px 16px; border: 1px solid #E2DCDE; border-radius: 12px; color: #1E1E1E; background: #FBF8F9; min-width: 0"></label>
          <label for="f-email" style="display: flex; flex-direction: column; gap: 8px; font-size: 13px; font-weight: 700; color: #1E1E1E">Email<input id="f-email" type="email" required style="font: inherit; font-weight: 500; font-size: 15px; padding: 13px 16px; border: 1px solid #E2DCDE; border-radius: 12px; color: #1E1E1E; background: #FBF8F9; min-width: 0"></label>
          <label for="f-phone" style="display: flex; flex-direction: column; gap: 8px; font-size: 13px; font-weight: 700; color: #1E1E1E">Phone <span style="font-weight: 500; color: #8A8486">(optional)</span><input id="f-phone" type="tel" style="font: inherit; font-weight: 500; font-size: 15px; padding: 13px 16px; border: 1px solid #E2DCDE; border-radius: 12px; color: #1E1E1E; background: #FBF8F9; min-width: 0"></label>
          <button type="submit" style="grid-column: 1 / -1; margin-top: 8px; font: inherit; font-weight: 700; font-size: 17px; padding: 16px; border: 0; border-radius: 999px; background: #E46454; color: #FFFFFF; cursor: pointer; box-shadow: 0 16px 30px -14px rgba(228,100,84,0.7)">Join as an Early Partner</button>
        </form>
      </div>
      <div id="apply-thanks" hidden>
        <div style="display: flex; flex-direction: column; gap: 8px; padding: 40px 0; text-align: center">
          <strong style="font-size: 24px; font-weight: 700; color: #1E1E1E">Thank you.</strong>
          <span>I'll be in touch within a few days. – Jay</span>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- FAQ -->
<section id="faq" style="max-width: 1200px; margin: 0 auto; padding: 0 24px 136px; display: flex; flex-wrap: wrap; gap: 48px 80px">
  <h2 style="flex: 1 1 280px; min-width: 0; margin: 0; font-size: clamp(34px, 3.8vw, 48px); line-height: 1.15; letter-spacing: -0.02em; color: #1E1E1E">
    <span style="display: block; font-weight: 700">Questions</span>
    <span style="display: block; font-weight: 400">partners ask.</span>
  </h2>
  <div style="flex: 2 1 520px; min-width: 0; display: flex; flex-direction: column; border-top: 1px solid #E5DFE1">
    <details style="border-bottom: 1px solid #E5DFE1; padding: 24px 0"><summary style="display: flex; justify-content: space-between; align-items: center; gap: 16px; font-weight: 600; font-size: 18px; color: #1E1E1E">Do I have to change my booking software?<span class="chev" style="color: #E46454; font-size: 26px; font-weight: 300; line-height: 1; transition: transform .2s; flex: none">+</span></summary><p style="margin: 12px 0 0; max-width: 40em">No. beme works alongside what you already use.</p></details>
    <details style="border-bottom: 1px solid #E5DFE1; padding: 24px 0"><summary style="display: flex; justify-content: space-between; align-items: center; gap: 16px; font-weight: 600; font-size: 18px; color: #1E1E1E">What does it cost?<span class="chev" style="color: #E46454; font-size: 26px; font-weight: 300; line-height: 1; transition: transform .2s; flex: none">+</span></summary><p style="margin: 12px 0 0; max-width: 40em">No listing or monthly fees. Early partners pay 10% commission, only on bookings made through beme, for a limited time.</p></details>
    <details style="border-bottom: 1px solid #E5DFE1; padding: 24px 0"><summary style="display: flex; justify-content: space-between; align-items: center; gap: 16px; font-weight: 600; font-size: 18px; color: #1E1E1E">I'm an independent artist. Can I join?<span class="chev" style="color: #E46454; font-size: 26px; font-weight: 300; line-height: 1; transition: transform .2s; flex: none">+</span></summary><p style="margin: 12px 0 0; max-width: 40em">Yes. Independent artists get the same tools and visibility as any salon or clinic.</p></details>
    <details style="border-bottom: 1px solid #E5DFE1; padding: 24px 0"><summary style="display: flex; justify-content: space-between; align-items: center; gap: 16px; font-weight: 600; font-size: 18px; color: #1E1E1E">Can I leave anytime?<span class="chev" style="color: #E46454; font-size: 26px; font-weight: 300; line-height: 1; transition: transform .2s; flex: none">+</span></summary><p style="margin: 12px 0 0; max-width: 40em">[YOUR ANSWER]</p></details>
    <details style="border-bottom: 1px solid #E5DFE1; padding: 24px 0"><summary style="display: flex; justify-content: space-between; align-items: center; gap: 16px; font-weight: 600; font-size: 18px; color: #1E1E1E">How do I get paid?<span class="chev" style="color: #E46454; font-size: 26px; font-weight: 300; line-height: 1; transition: transform .2s; flex: none">+</span></summary><p style="margin: 12px 0 0; max-width: 40em">[YOUR ANSWER]</p></details>
  </div>
</section>

<!-- CLIENTS + FOOTER -->
<footer style="max-width: 1200px; margin: 0 auto; padding: 0 24px">
  <div id="clients" style="border-top: 1px solid #ECE7E9; padding-block: 48px; display: flex; flex-wrap: wrap; gap: 24px 48px; align-items: center; justify-content: space-between">
    <div style="flex: 1 1 320px; min-width: 0; display: flex; flex-direction: column; gap: 4px">
      <strong style="font-size: 20px; font-weight: 700; color: #1E1E1E">Looking to book a treatment?</strong>
      <span>Join the waitlist to be first to book when beme launches.</span>
    </div>
    <div style="flex: 1 1 380px; min-width: 0">
      <div id="waitlist-form-wrap">
        <form id="waitlist-form" style="display: flex; flex-wrap: wrap; gap: 10px">
          <label for="w-email" style="position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0)">Email address</label>
          <input id="w-email" type="email" required placeholder="you@email.com" style="flex: 1 1 220px; min-width: 0; font: inherit; font-size: 15px; padding: 13px 20px; border: 1px solid #E2DCDE; border-radius: 999px; color: #1E1E1E; background: #FFFFFF">
          <button type="submit" style="font: inherit; font-weight: 700; font-size: 15px; padding: 13px 24px; border: 0; border-radius: 999px; background: #1E1E1E; color: #FFFFFF; cursor: pointer">Join the waitlist</button>
        </form>
      </div>
      <div id="waitlist-thanks" hidden>
        <span style="font-weight: 700; color: #1E1E1E">You're on the list. We'll email you when beme opens.</span>
      </div>
    </div>
  </div>
  <div style="border-top: 1px solid #ECE7E9; padding-block: 28px 36px; display: flex; flex-wrap: wrap; gap: 16px 32px; justify-content: space-between; align-items: center; font-size: 14px; color: #8A8486">
    <span style="display: flex; align-items: center; gap: 14px"><img src="images/beme-logo.png" alt="beme" style="height: 22px; width: auto; display: block">Made in Vancouver, BC</span>
    <div style="display: flex; flex-wrap: wrap; gap: 28px">
      <a href="https://instagram.com/[HANDLE]" style="color: #5A5658; text-decoration: none">Instagram</a>
      <a href="#top" style="color: #5A5658; text-decoration: none">Privacy</a>
      <a href="#top" style="color: #5A5658; text-decoration: none">Terms</a>
      <a href="#apply" style="color: #5A5658; text-decoration: none">Contact</a>
    </div>
  </div>
</footer>

</div>
<script>
document.querySelectorAll('[data-pick="artist"]').forEach(function(a){a.addEventListener('click',function(){var s=document.getElementById('f-type');if(s)s.value='artist';});});
document.getElementById('apply-form').addEventListener('submit',function(e){e.preventDefault();document.getElementById('apply-form-wrap').hidden=true;document.getElementById('apply-thanks').hidden=false;});
document.getElementById('waitlist-form').addEventListener('submit',function(e){e.preventDefault();document.getElementById('waitlist-form-wrap').hidden=true;document.getElementById('waitlist-thanks').hidden=false;});
</script>
</body>
</html>

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/b64cee3b-78bc-4f8d-9d3c-ceb09e61c58a).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
