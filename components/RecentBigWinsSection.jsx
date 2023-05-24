"use client"

import recentBigWins from "@/lib/db/resources/recent-big-wins"
import HorizontalScrollableSection from "./HorizontalScrollableSection"
import LiveIndicator_1 from "./LiveIndicator_1"
import WinCard_1 from "./WinCard_1"

export default function RecentBigWinsSection() {

    return (
        <HorizontalScrollableSection
            title="Recent Big Wins"
            spaceBetween={10}
            showPrevNextButtons={false}
            showSeeMore={false}
            titleLeft={ <LiveIndicator_1 /> }
            slidesPerView={1.6}
            slidesPerView_sm={2}
            slidesPerView_md={3}
            slidesPerView_lg={6}
            slidesPerView_xl={6}
            items={recentBigWins}
            renderSlideTemplate={recentBigWin => <WinCard_1 key={recentBigWin.id} {...recentBigWin} />}
            wrapperClass="!mt-20"
            containerClass="!mt-4"
        />
    )
}