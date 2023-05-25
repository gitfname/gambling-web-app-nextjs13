"use client"

import GameCard_1 from "./GameCard_1"
import HorizontalScrollableSection from "./HorizontalScrollableSection"
import topRatedGames from "@/lib/db/resources/top-rated-games"

export default function TopRatedGamesSection() {

    return (
        <HorizontalScrollableSection
            title="Top Rated Gmes"
            buttonsPlace="tr"
            spaceBetween={10}
            showPrevNextButtons={true}
            showSeeMore={false}
            slidesPerView={3}
            slidesPerView_sm={3}
            slidesPerView_md={3}
            slidesPerView_lg={5}
            slidesPerView_xl={6}
            items={topRatedGames}
            renderSlideTemplate={topRatedGame => <GameCard_1 key={topRatedGame.id} {...topRatedGame} />}
            wrapperClass="!mt-20"
            containerClass="!mt-4"
        />
    )
}