"use client"

import { Article } from "@/interfaces/researchpaper";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Skeleton from "./Skeleton";
import { DebouncedInput } from "@/hooks/useDebounce";

const Homepage = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [papers, setPapers] = useState<Article[]>([]);
    const [search, setSearch] = useState("");
    const [searchCategory, setSearchCategory] = useState("title");
    const [sortBy, setSortBy] = useState<"title" | "year" | "impactFactor" | "">("");
    const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
    const [currentPage, setCurrentPage] = useState(1);
    const [papersPerPage] = useState(15);

    const fetchPaperDetails = async () => {

        setLoading(true);

        const response = await fetch("/api/getpaper");

        const result = await response.json();

        console.log(result);

        setPapers(result.data);
        setLoading(false);
    }

    useEffect(() => {
        fetchPaperDetails();
    }, []);

    const filteredSearch = () => {
        let results = papers;

        if (search) {
            const keyword = search.toLowerCase();
            results = results.filter((paper) => {
                switch (searchCategory) {
                    case "title":
                        return paper.papertitle?.toLowerCase().includes(keyword);
                    case "author":
                        return paper.coauthors?.toLowerCase().includes(keyword);
                    case "journal":
                        return paper.journal?.title?.toLowerCase().includes(keyword);
                    case "publisher":
                        return paper.publisher?.publishername?.toLowerCase().includes(keyword);
                    default:
                        return true;
                }
            });
        }

        if (sortBy) {
            results = [...results].sort((a, b) => {
                let valA: string | number | null = null;
                let valB: string | number | null = null;

                switch (sortBy) {
                    case "title":
                        valA = a.papertitle ?? "";
                        valB = b.papertitle ?? "";
                        break;
                    case "year":
                        valA = a.published_at ? new Date(a.published_at).getFullYear() : 0;
                        valB = b.published_at ? new Date(b.published_at).getFullYear() : 0;
                        break;
                    case "impactFactor":
                        valA = a.journalaltimpactfactor ?? 0;
                        valB = b.journalaltimpactfactor ?? 0;
                        break;
                }

                if (valA! < valB!) return sortOrder === "asc" ? -1 : 1;
                if (valA! > valB!) return sortOrder === "asc" ? 1 : -1;
                return 0;
            });
        }

        return results;
    };

    const paginatedPapers = () => {
        const filtered = filteredSearch();
        const indexOfLastPaper = currentPage * papersPerPage;
        const indexOfFirstPaper = indexOfLastPaper - papersPerPage;
        return filtered.slice(indexOfFirstPaper, indexOfLastPaper);
    }

    const totalPages = Math.ceil(filteredSearch().length / papersPerPage);

    return (
        <>

            <div className="search-bar">
                <DebouncedInput
                    placeholder="Search papers..."
                    value={search}
                    onChange={(e) => setSearch(e)}
                    className="search-input"
                />

                <select
                    value={searchCategory}
                    onChange={(e) => setSearchCategory(e.target.value)}
                    className="search-select"
                >
                    <option value="title">Title</option>
                    <option value="author">Author</option>
                    <option value="journal">Journal</option>
                    <option value="publisher">Publisher</option>
                </select>

                <div className="sort-controls">
                    <label htmlFor="sortSelect">Sort by:</label>

                    <select
                        id="sortSelect"
                        value={sortBy}
                        onChange={(e) =>
                            setSortBy(e.target.value as 'title' | 'year' | 'impactFactor' | '')
                        }
                    >
                        <option value="">None</option>
                        <option value="title">Title</option>
                        <option value="year">Year</option>
                        <option value="impactFactor">Impact Factor</option>
                    </select>

                    <button
                        type="button"
                        onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
                    >
                        {sortOrder === 'asc' ? '⬆ Asc' : '⬇ Desc'}
                    </button>
                </div>

            </div>

            {loading ? (
                <Skeleton count={15} />
            ) : (
                <div className="paper-container">
                    {paginatedPapers().map((paper) => (
                        <div key={paper.id} className="paper-card">
                            <div className="paper-left">
                                <img
                                    src={paper.journal?.journalimage || paper.journal?.journallogo || "/placeholder-book.jpg"}
                                    alt={paper.papertitle.slice(0, 20)}
                                    className="paper-image"
                                />

                                <div className="impact-factor">
                                    IF <span>{paper.journalaltimpactfactor ?? "N/A"}</span>
                                </div>
                            </div>

                            <div className="paper-right">
                                <h2 className="paper-title">
                                    Paper Title:{" "}
                                    <span>{paper.papertitle}</span>
                                </h2>
                                <hr />
                                <p><strong>Author:</strong> {paper.coauthors}</p>
                                <p><strong>Publisher:</strong> {paper.publisher?.publishername}</p>
                                <p><strong>Journal:</strong> {paper.journal?.title}</p>

                                <div className="btn-class" >
                                    <button className="btn-color" onClick={() => router.push(`/paperdetail/${paper.id}`)} >View Details</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            )}

            <div className="pagination">
                <button
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className="pagination-btn"
                >
                    Prev
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`pagination-btn ${currentPage === page ? "active" : ""}`}
                    >
                        {page}
                    </button>
                ))}

                <button
                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className="pagination-btn"
                >
                    Next
                </button>

                <span className="pagination-info">
                    Page {currentPage} of {totalPages} ({filteredSearch().length} results)
                </span>
            </div>
        </>
    )
}

export default Homepage;