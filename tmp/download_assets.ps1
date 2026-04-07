$assets = @{
    "astronaut.png.webp"       = "https://rocket-saas.io/wp-content/themes/Rocket-SaaS-2025/images-new/astronaut.png.webp"
    "rocket.png.webp"          = "https://rocket-saas.io/wp-content/themes/Rocket-SaaS-2025/images-new/rocket.png.webp"
    "planet.png.webp"          = "https://rocket-saas.io/wp-content/themes/Rocket-SaaS-2025/images-new/planet.png.webp"
    "dog.png.webp"             = "https://rocket-saas.io/wp-content/themes/Rocket-SaaS-2025/images-new/dog.png.webp"
    "funnel-footer.png.webp"   = "https://rocket-saas.io/wp-content/themes/Rocket-SaaS-2025/images-new/funnel-footer.png.webp"
    "hero.png"                 = "https://rocket-saas.io/wp-content/themes/Rocket-SaaS-2025/images-new/home-hero.png"
    "logo-w.svg"               = "https://rocket-saas.io/wp-content/themes/Rocket-SaaS-2025/images-new/logo-w.svg"
    "alex-client.jpg.webp"     = "https://rocket-saas.io/wp-content/themes/Rocket-SaaS-2025/images-new/alex-client.jpg.webp"
    "blue-Ryan.png.webp"       = "https://rocket-saas.io/wp-content/themes/Rocket-SaaS-2025/images-new/blue-Ryan.png.webp"
    "Daniel-Briggs.jpg.webp"   = "https://rocket-saas.io/wp-content/themes/Rocket-SaaS-2025/images-new/Daniel-Briggs.jpg.webp"
    "Mike-Clark.jpg.webp"      = "https://rocket-saas.io/wp-content/themes/Rocket-SaaS-2025/images-new/Mike-Clark.jpg.webp"
    "icon-rocket.png.webp"     = "https://rocket-saas.io/wp-content/themes/Rocket-SaaS-2025/images-new/icon-rocket.png.webp"
    "icon-computer.png.webp"   = "https://rocket-saas.io/wp-content/themes/Rocket-SaaS-2025/images-new/icon-computer.png.webp"
    "icon-lightning.png.webp"  = "https://rocket-saas.io/wp-content/themes/Rocket-SaaS-2025/images-new/icon-lightning.png.webp"
    "icon-magnet.png.webp"      = "https://rocket-saas.io/wp-content/themes/Rocket-SaaS-2025/images-new/icon-magnet.png.webp"
    "icon-footer1-new.png.webp" = "https://rocket-saas.io/wp-content/themes/Rocket-SaaS-2025/images-new/icon-footer1-new.png.webp"
    "icon-footer2-new.png.webp" = "https://rocket-saas.io/wp-content/themes/Rocket-SaaS-2025/images-new/icon-footer2-new.png.webp"
    "icon-footer3-new.png.webp" = "https://rocket-saas.io/wp-content/themes/Rocket-SaaS-2025/images-new/icon-footer3-new.png.webp"
}

$publicDir = "c:\Users\dishi\Fidarix\fidarix\public"
$logFile = "c:\Users\dishi\Fidarix\fidarix\tmp\ps_log.txt"
"Starting downloads..." | Out-File -FilePath $logFile

foreach ($key in $assets.Keys) {
    $dest = Join-Path $publicDir $key
    $url = $assets[$key]
    "Downloading $key from $url..." | Out-File -FilePath $logFile -Append
    try {
        Invoke-WebRequest -Uri $url -OutFile $dest -ErrorAction Stop
        "Success: $key" | Out-File -FilePath $logFile -Append
    } catch {
        "Error: $key - $_" | Out-File -FilePath $logFile -Append
    }
}
