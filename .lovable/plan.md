

## Plan: Update Joshua's Role & Improve Image Quality

### 1. Update Team Section in About.tsx

Replace the string array with an object array containing roles. Remove Rocco. Joshua gets **CFO & CMO**.

```
Team data:
- Pedro Justa → CEO
- Shery Imran → Co-CEO  
- Joshua Bracero → CFO & CMO
- Noah Mazard → COO
```

Each chip will show the role as a small label beneath the name. Layout stays the same but with 4 members.

### 2. Improve Image Quality Across the Site

All `<img>` tags currently use either `object-cover` with constrained heights or lack quality hints. Changes:

- **About.tsx** (line 66): Remove the `h-48` height constraint on the crowd image so it renders at natural resolution. Use a taller container (`h-64 md:h-80`).
- **Hero.tsx** (line 76): Already uses full-width. Add `fetchpriority="high"` and remove any dimension constraints that could cause compression artifacts.
- **Solution.tsx**: Check and increase any constrained image heights, ensure `loading="eager"` for above-fold images.
- **All images**: Add `decoding="async"` where appropriate and ensure no unnecessary size constraints are clipping resolution.

### Technical Details

**Files modified:**
- `src/components/hidroshow/About.tsx` — Team data + crowd image sizing
- `src/components/hidroshow/Hero.tsx` — Image quality attributes
- `src/components/hidroshow/Solution.tsx` — Image quality attributes

No new dependencies needed.

