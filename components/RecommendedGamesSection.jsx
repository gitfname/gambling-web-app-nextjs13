"use client"

import recommendedGames from "@/lib/db/resources/recommended-games"
import HorizontalScrollableSection from "./HorizontalScrollableSection"
import RecommendedGameCard_1 from "./RecommendedGameCard_1"

export default function RecommendedGamesSection() {

    return (
        <HorizontalScrollableSection
            title="Recommended Games"
            spaceBetween={10}
            showPrevNextButtons={true}
            showSeeMore={false}
            showViewAll={true}
            slidesPerView={2}
            slidesPerView_sm={3}
            slidesPerView_md={3}
            slidesPerView_lg={5}
            slidesPerView_xl={6}
            items={recommendedGames}
            renderSlideTemplate={recommendedGame => <RecommendedGameCard_1 key={recommendedGame.id} {...recommendedGame} />}
            wrapperClass="!mt-20"
            containerClass="!mt-4"
        />
    )
}