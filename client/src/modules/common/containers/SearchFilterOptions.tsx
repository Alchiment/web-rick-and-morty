import TitleParagraph from "../components/titles/TitleParagraph.tsx";
import Button from "../components/buttons/Button.tsx";

export default function SearchFilterOptions() {
    return (
        <div className="bg-white p-6 shadow-2xl rounded">
            <div>
                <TitleParagraph className="mb-2">
                    Character
                </TitleParagraph>
                <div className="flex">
                    <Button block={true} className="bg-b-primary text-b-purple border-2 border-b-purple-100">
                        All
                    </Button>
                    <Button block={true} className="bg-transparent border-2 mx-2">
                        Starred
                    </Button>
                    <Button block={true} className="bg-transparent border-2">
                        Others
                    </Button>
                </div>
            </div>
            <div>
                <TitleParagraph className="my-2">
                    Specie
                </TitleParagraph>
                <div className="flex">
                    <Button block={true} className="bg-b-primary text-b-purple border-2 border-b-purple-100">
                        All
                    </Button>
                    <Button block={true} className="bg-transparent border-2 mx-2">
                        Human
                    </Button>
                    <Button block={true} className="bg-transparent border-2">
                        Alien
                    </Button>
                </div>
            </div>
            <div className="w-full mt-4">
                <Button disabled={true} block={true}>
                    Filter
                </Button>
            </div>
        </div>
    );
}