# Atylus i18n Routing Rules

## Temel Kural: Lokalize URL Standardı

Bu proje **Astro + Cloudflare Pages** üzerine kurulu çok dilli (TR / EN / DE) bir sitedir.
Her geliştirmede aşağıdaki kurallar **mutlaka** uygulanmalıdır.

---

## 1. URL Yapısı — Dil Bazlı Path Segmentleri

Her dil için URL segmentleri `src/i18n/routes.ts` dosyasındaki `pageRoutes` map'inde tanımlanmıştır.

| Route Key         | TR                           | EN                           | DE                              |
|-------------------|------------------------------|------------------------------|---------------------------------|
| `projects`        | `/tr/projeler/`              | `/en/projects/`              | `/de/projekte/`                 |
| `vendilusProject` | `/tr/projeler/vendilus/`     | `/en/projects/vendilus/`     | `/de/projekte/vendilus/`        |
| `services`        | `/tr/hizmetler/`             | `/en/services/`              | `/de/leistungen/`               |
| `about`           | `/tr/hakkimizda/`            | `/en/about/`                 | `/de/ueber-uns/`                |
| `contact`         | `/tr/contact/`               | `/en/contact/`               | `/de/kontakt/`                  |
| `team`            | `/tr/ekip/`                  | `/en/team/`                  | `/de/team/`                     |

**YANLIŞ:** `/tr/projects/vendilus/` — TR sayfasında EN segment kullanılamaz.
**DOGRU:** `/tr/projeler/vendilus/` — TR sayfasında TR segmenti zorunludur.

---

## 2. Hardcoded Link Yasagi

Kaynak kodda hicbir zaman dil-agnostik veya yanlis lokalize path hardcode edilmemelidir.

### Yasak Kullanımlar
- { "href": "/projects/vendilus" }
- { "href": "/projects" }
- { "href": "/services" }
- { "href": "/team" }

### Dogru Kullanımlar

JSON mesaj dosyalarında (src/react-pages/messages/home/):
- tr.json -> /tr/projeler/vendilus/, /tr/projeler/, /tr/hizmetler/ vb.
- en.json -> /en/projects/vendilus/, /en/projects/, /en/services/ vb.
- de.json -> /de/projekte/vendilus/, /de/projekte/, /de/leistungen/ vb.

Astro bilesenlerinde:
```astro
import { getLocalizedPagePath } from "@/i18n/routes";
const href = getLocalizedPagePath(locale, "vendilusProject"); // /tr/projeler/vendilus/
```

React bilesenlerinde (next/link compat otomatik getLocalizedHref cagirir):
```tsx
<Link href="/tr/projeler/vendilus/">...</Link>
```

---

## 3. Yeni Route Ekleme Prosedürü

1. src/i18n/routes.ts -> pageRoutes mapine uc dil icin segment ekle
2. src/i18n/routes.ts -> Gerekirse legacyPagePathToKey'e geri uyumluluk girdisi ekle
3. src/pages/[locale]/[...segments].astro -> MarketingPageKey listesine key ekle
4. Mesaj dosyaları -> tr.json, en.json, de.json dosyalarında tam canonical path kullan
5. Middleware cross-locale redirect otomatik calısır (ayrıca kod eklemeye gerek yok)

---

## 4. Middleware Cross-Locale Redirect (SEO)

functions/_middleware.ts middleware su islemi otomatik yapar:
- Yanlis locale segmentiyle erisilen URL'leri 301 redirect ile dogru URL'ye yonlendirir
- Ornek: /tr/projects/vendilus/ -> 301 -> /tr/projeler/vendilus/
- Bu, hem 404'u onler hem de SEO canonical degerini korur

---

## 5. getLocalizedHref Davranısı

src/i18n/routes.ts icindeki getLocalizedHref(href, locale) fonksiyonu:
1. href zaten locale prefix iceriyorsa (ornek /tr/projects/vendilus/):
   - pageRoutes icinde karsiligi varsa -> canonical locale path'e redirect
   - Locale eslesmiyorsa -> dogru locale'e cevirir
2. href locale prefix icermiyorsa (ornek /projects/vendilus):
   - legacyPagePathToKey mapinde arar -> canonical locale path'e cevirir

---

## 6. legacyPagePathToKey Map

src/i18n/routes.ts icindeki bu map, legacy path'leri MarketingPageKey'e donusturur.
Yeni proje/sayfa eklendiginde ilgili legacy path'ler de eklenmelidir:
- legacyPagePathToKey.set("/projects/vendilus/", "vendilusProject");

---

## 7. SEO Checklist — Her Gelistirmede

- [ ] Canonical URL dogru locale segmentini iceriyor mu?
- [ ] Hardcoded locale-agnostik link yok mu?
- [ ] hreflang alternates dogru mu? (PageDocument.astro bunu otomatik yonetir)
- [ ] Yanlis locale path'ler middleware'de 301 redirect aliyor mu?
- [ ] getStaticPaths() tum locale'leri kapsıyor mu?
