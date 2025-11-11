// lib/hooks/useMobileUI.ts
"use client";

import { useState, useEffect } from "react";

// 1. Tentukan tipe data untuk nilai yang dikembalikan
interface useMobileUIReturn {
  isMobile: boolean;
  hasChecked: boolean;
}

/**
 * Custom hook untuk mendeteksi ukuran layar dan status hidrasi.
 * @param {number} breakpoint - Lebar layar (default: 768px).
 * @returns {useMobileUIReturn}
 * - isMobile: true jika layar di bawah breakpoint.
 * - hasChecked: true jika pengecekan sisi klien sudah selesai.
 */
export const useMobileUI = (
  breakpoint: number = 768 // 2. Tipe data untuk parameter
): useMobileUIReturn => {
  // 3. (Opsional) Tipe data eksplisit untuk state,
  //    walaupun TypeScript biasanya bisa menebaknya (inference)
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [hasChecked, setHasChecked] = useState<boolean>(false);

  useEffect(() => {
    // Pastikan kode ini hanya berjalan di browser
    if (typeof window === "undefined") {
      return;
    }

    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };

    checkScreenSize();
    setHasChecked(true); // Tandai pengecekan selesai

    window.addEventListener("resize", checkScreenSize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, [breakpoint]); // dependensi tetap sama

  return { isMobile, hasChecked };
};
