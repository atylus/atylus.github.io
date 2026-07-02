# Theme Color Palette

Bu dokuman, tema uzerindeki ana renk paletini kod tabanindaki gercek kaynaklardan cikartir.

Kaynak dosyalar:
- `public/assets/scss/global/_variables.scss`
- `public/assets/scss/utilities/_dark-mood.scss`

## 1. Matematiksel ve Algoritmik Ozet

Amac:
- Tema renk tokenlarini tek bir referans dokumanda toplamak
- Light ve dark mode davranisini ayristirmak
- Tasarim kararlarini yeniden kullanilabilir hale getirmek

Pseudocode:

```text
INPUT:
  variables.scss
  dark-mood.scss

OUTPUT:
  theme-color-palette.md

ALGORITHM:
  1. :root altindaki tum color ve gradient tokenlarini oku
  2. Tokenlari anlamsal gruplara ayir:
     - brand
     - content
     - surface
     - border
     - gradients
  3. dark mode dosyasindaki ek hard-coded tonlari ayikla
  4. Bu tonlari kullanim amaclarina gore etiketle
  5. Sonucu markdown tablo ve notlar olarak dokumante et
```

Complexity:
- Zaman karmasikligi: `O(n)`
- Alan karmasikligi: `O(n)`

Burada `n`, taranan token ve renk tanimi sayisidir.

## 2. Ana Tema Tokenlari

### Brand Colors

| Token | Deger | Rol |
| --- | --- | --- |
| `--color-primary` | `#45D0BD` | Ana accent, CTA ve vurgular |
| `--color-secondary` | `#EF6464` | Ikinci vurgu tonu |
| `--color-secondary-alt` | `#F57E7E` | Secondary varyasyonu |

### Content Colors

| Token | Deger | Rol |
| --- | --- | --- |
| `--color-content-white` | `#FFFFFF` | Koyu zeminlerde metin ve ikon |
| `--color-content-black` | `#000000` | Saf siyah |
| `--color-content-black2` | `#333333` | Govde metni ve koyu neutral |
| `--color-heading` | `#111111` | Baslik ve koyu vurgu |
| `--color-body` | `#333333` | Varsayilan govde metni |

### Surface Colors

| Token | Deger | Rol |
| --- | --- | --- |
| `--color-surface-white` | `#FFFFFF` | Acik kart ve zemin |
| `--color-surface-black` | `#000000` | Saf siyah yuzey |
| `--color-surface-dark` | `#111111` | Koyu yuzey |
| `--color-surface-dark-2` | `#1F1F1F` | Ana dark mode arka plan ve paneller |
| `--color-surface-light` | `#F0F2F4` | Acik gri zemin |
| `--color-surface-light-1` | `#ECF0F4` | Acik gri varyasyon |
| `--color-surface-light-3` | `#F5F5F5` | Soft arka plan |

### Border

| Token | Deger | Rol |
| --- | --- | --- |
| `--color-border` | `#D9D9D9` | Varsayilan border |

## 3. Gradient Palette

| Token | Deger | Rol |
| --- | --- | --- |
| `--gradient-1` | `linear-gradient(159deg, #A2F5FF 2.13%, #EA84C2 95.42%)` | Soft hero / decorative gradient |
| `--gradient-3` | `linear-gradient(113deg, #45D0BD 2.7%, #44B6E9 98.55%)` | Ana aqua-blue gradient |
| `--gradient-btn-1` | `linear-gradient(102deg, #8258C8 0.77%, #6766C8 32.11%, #2C84C8 100.27%)` | Buton ve CTA gradient |

## 4. Dark Mode Ek Tonlari

`dark mode`, `body.active-body` sinifi ile aktif oluyor. Bu mod, tum renkleri yeniden token bazli tanimlamak yerine bilesen seviyesinde override ediyor.

### Dark Mode Hard-Coded Colors

| Deger | Kullanim |
| --- | --- |
| `#1A1A1A` | Dark mode ana panel ve yuzey override tonu |
| `#121212` | Daha derin hero background |
| `#171717` | Kart / tab / quote gibi ikincil koyu yuzey |
| `#434343` | Dark mode border tonu |
| `#454545` | Header ve side menu border tonu |
| `#636363` | Form input border tonu |
| `#9B9B9B` | Ikincil fiyat / muted text |

## 5. Siklikla Kullanilan Ek Accent Tonlari

Bu renkler token olarak degil, ozellikle gradient ve bazi ozel bilesenlerde dogrudan kullaniliyor:

| Deger | Gozlenen Kullanim |
| --- | --- |
| `#44B6E9` | Primary gradient bitis tonu |
| `#8258C8` | Button / marquee / headline gradient baslangici |
| `#6766C8` | Button gradient orta tonu |
| `#2C84C8` | Button gradient bitis tonu |
| `#A2F5FF` | Soft gradient baslangici |
| `#EA84C2` | Soft gradient bitis tonu |
| `#FAC12E` | Rating yildizlari |
| `#87899B` | Muted builder text |
| `#898989` | Placeholder tonu |
| `#ADADAD` | Acik input border varyasyonu |

## 6. Tema Davranisi

### Light Mode

- Varsayilan tema, `:root` altindaki tokenlari kullanir
- Acik kartlar ve acik gri zeminler `surface-light` ailesine dayanir
- Accent renk ekseni:
  - `#45D0BD`
  - `#44B6E9`
  - `#8258C8`

### Dark Mode

- `body.active-body` ile aktif edilir
- Genel zemin ekseni:
  - `#1F1F1F`
  - `#1A1A1A`
  - `#171717`
- Metinler agirlikli olarak `--color-content-white` ile beyaza cekilir
- Borderlar `#434343`, `#454545`, `#636363` bandina gecis yapar

## 7. Tasarim Sistemi Onerisi

Renk kullanimini daha maintainable hale getirmek icin gelecekte su ayrim korunmali:

1. Semantic token katmani
   - `--color-primary`
   - `--color-heading`
   - `--color-surface-dark-2`
   - `--color-border`

2. Primitive token katmani
   - `#45D0BD`
   - `#44B6E9`
   - `#8258C8`
   - `#1A1A1A`

3. Component token katmani
   - header border
   - card background
   - CTA gradient
   - muted text

Bu ayrim, theme override karmasikligini lineer seviyede tutar ve yeniden tasarim maliyetini azaltir.

## 8. Kisa Sonuc

Temanin cekirdek renk omurgasi su eksende kuruludur:

- Primary aqua: `#45D0BD`
- Primary blue: `#44B6E9`
- CTA purple-blue: `#8258C8 -> #2C84C8`
- Base dark surface: `#1F1F1F`
- Base text dark: `#111111 / #333333`
- Base text light: `#FFFFFF`

Bu dosya, tema uzerinde renk standardizasyonu ve yeni bilesen tasarimlari icin referans kaynak olarak kullanilabilir.
