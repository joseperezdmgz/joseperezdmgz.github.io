<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>

html {
    --primary: #1e2936;
    --secondary: #195f98;
    --tertiary: #a8a5a5;
    --bg-primary: linear-gradient(90deg, #f5f5f5 0%, #e0e0e0 56%, #f0f0f0 );
    --bg-box-expansion: #ffffff;
    --bg-box-expansion-open: #eaeaea; 
  }
  
  html.dark {
    --primary: white;
    --secondary: #edfc56;
    --tertiary: #969494;
    --bg-primary: linear-gradient(90deg, #303944 0%, #222930 56%, #1e2936 100%);
    --bg-box-expansion: #192025;
    --bg-box-expansion-open: #29353d;
  }
  
  html{ background: var(--bg-primary); color: var(--primary); }
  
    
  * { padding: 0; margin: 0; }
  html, 
  body{ height: 100%; width: 100%; }

  header {-webkit-backdrop-filter: blur(10px); backdrop-filter: blur(10px); box-shadow: 0 -7px 14px #000;transform: translateZ(0); will-change: transform;}
  @media (max-width: 1024px) {
    html aside{ background: var(--bg-primary) }
  }
</style>