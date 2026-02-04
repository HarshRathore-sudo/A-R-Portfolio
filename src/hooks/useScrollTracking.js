import { useState, useEffect, useCallback } from 'react';

/**
 * Custom hook for tracking scroll position and active section
 * @param {Array} sectionRefs - Array of React refs for each section
 * @returns {Object} - activeIdx, scrollPercent, showSticky
 */
function useScrollTracking(sectionRefs) {
    const [activeIdx, setActiveIdx] = useState(0);
    const [scrollPercent, setScrollPercent] = useState(0);
    const [showSticky, setShowSticky] = useState(false);

    const handleScroll = useCallback(() => {
        if (sectionRefs.length === 0) return;

        const offsets = sectionRefs.map(
            (ref) => ref.current?.getBoundingClientRect().top ?? Infinity
        );
        const active = offsets.findIndex(
            (top, idx) => top > 80 && (idx === 0 || offsets[idx - 1] <= 80)
        );
        if (active === -1) {
            setActiveIdx(offsets.length - 1);
        } else {
            setActiveIdx(Math.max(0, active - 1));
        }

        // Progress bar: percent through resume sections
        const total = sectionRefs.length;
        let percent = 0;
        if (total > 1) {
            const sectionTops = sectionRefs.map(
                (ref) => ref.current?.getBoundingClientRect().top ?? 0
            );
            const scrollY = window.scrollY + 100;
            for (let i = 0; i < total - 1; i++) {
                if (scrollY >= sectionTops[i] && scrollY < sectionTops[i + 1]) {
                    percent =
                        (i +
                            (scrollY - sectionTops[i]) /
                            (sectionTops[i + 1] - sectionTops[i])) /
                        (total - 1);
                    break;
                }
            }
            if (scrollY >= sectionTops[total - 1]) percent = 1;
        }
        setScrollPercent(percent);

        // Sticky header - adjusted threshold to 180px
        setShowSticky(window.scrollY > 180);
    }, [sectionRefs]);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, [handleScroll]);

    return { activeIdx, scrollPercent, showSticky };
}

export default useScrollTracking;
