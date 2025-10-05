"use client";

import { Article } from "@/interfaces/researchpaper";
import { useEffect, useState } from "react";
import Skeleton from "./Skeleton";
import { format } from "date-fns";
import Link from "next/link";

export const CardDetails = ({ id }: { id: string }) => {
    const [papers, setPaper] = useState<Article[]>([]);
    const [loading, setLoading] = useState(false);

    const fetchCardDetails = async () => {
        setLoading(true);
        try {
            const response = await fetch(`/api/getpaper/${id}`);
            if (!response.ok) {
                throw new Error("Failed to fetch card details");
            }
            const data = await response.json();
            setPaper(Array.isArray(data.data) ? data.data : [data.data]);
        } catch (error) {
            console.error("Error fetching paper:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCardDetails();
    }, [id]);

    const formatDate = (dateString: string): string => {
        try {
            return format(new Date(dateString), "MMMM d, yyyy");
        } catch {
            return "N/A";
        }
    };

    return (
        <div className="card-details-container">
            {loading ? (
                <Skeleton count={1} />
            ) : papers.length === 0 ? (
                <div className="no-data">No article found for ID: {id}</div>
            ) : (
                papers.map((paper) => (
                    <article key={paper.id} className="article-card">
                        <header className="article-header">
                            <h1>{paper?.papertitle}</h1>
                            {paper?.journal?.journalimage && (
                                <img
                                    src={paper?.journal?.journalimage}
                                    alt={paper?.journal?.title || "Journal image"}
                                    className="journal-image"
                                />
                            )}
                        </header>

                        <section className="service-details">
                            <div>
                                <img src={paper?.journal?.journalimage || ""} alt={paper?.journal?.title || "Journal image"} />
                            </div>
                            <h4>
                                {paper?.journal?.scicategory}
                            </h4>
                            <h5>
                                {paper?.journal?.scopuscategory}
                            </h5>

                            <h6>
                                {paper?.journal?.journalsubjectarea}
                            </h6>

                            <h5>
                                Created at: {formatDate(paper?.created_at)}
                            </h5>
                            <h5>
                                Updated at: {formatDate(paper?.updated_at)}
                            </h5>
                        </section>

                        <section className="article-meta">
                            <p>
                                <strong>Assignment No:</strong> {paper?.assignmentno}
                            </p>
                            <p>
                                <strong>Published:</strong> {formatDate(paper?.published_at)}
                            </p>
                            {paper?.coauthors && (
                                <p>
                                    <strong>Co-authors:</strong> {paper?.coauthors}
                                </p>
                            )}
                            {paper?.editorcode && (
                                <p>
                                    <strong>Editor Code:</strong> {paper?.editorcode}
                                </p>
                            )}
                            <p>
                                <strong>Status:</strong> {paper.status ? "Active" : "Inactive"}
                            </p>
                            {paper.articlelink && (
                                <p>
                                    <strong>Article Link:</strong>{" "}
                                    <Link href={paper.articlelink} target="_blank">
                                        View Article
                                    </Link>
                                </p>
                            )}
                        </section>

                        <section className="journal-details">
                            <h2>Journal Information</h2>
                            <p>
                                <strong>Title:</strong>{" "}
                                {paper?.journal.displaytitle || paper.journal.title}
                            </p>
                            {paper?.journal.impactfactor && (
                                <p>
                                    <strong>Impact Factor:</strong> {paper.journal.impactfactor}
                                </p>
                            )}
                            {paper?.journalaltimpactfactor && (
                                <p>
                                    <strong>Alternate Impact Factor:</strong>{" "}
                                    {paper?.journalaltimpactfactor}
                                </p>
                            )}
                            {paper?.journal?.hirschindex && (
                                <p>
                                    <strong>Hirsch Index:</strong> {paper.journal.hirschindex}
                                </p>
                            )}
                            {paper?.journal?.crimsoniscore && (
                                <p>
                                    <strong>Crimsoni Score:</strong> {paper.journal.crimsoniscore}
                                </p>
                            )}
                            {paper?.journal?.articleinfluence && (
                                <p>
                                    <strong>Article Influence:</strong>{" "}
                                    {paper.journal.articleinfluence}
                                </p>
                            )}
                            {paper?.journal?.issn && (
                                <p>
                                    <strong>ISSN:</strong> {paper.journal.issn}
                                </p>
                            )}
                            {paper?.journal?.journalabbreviation && (
                                <p>
                                    <strong>Abbreviation:</strong>{" "}
                                    {paper.journal.journalabbreviation}
                                </p>
                            )}
                            {paper?.journal?.journalreach && (
                                <p>
                                    <strong>Reach:</strong> {paper.journal.journalreach}
                                </p>
                            )}
                            {paper?.journal?.journalwebsiteurl && (
                                <p>
                                    <strong>Website:</strong>{" "}
                                    <Link href={paper.journal.journalwebsiteurl} target="_blank">
                                        Visit Journal
                                    </Link>
                                </p>
                            )}
                            {paper?.journal?.statementofscope && (
                                <p>
                                    <strong>Scope:</strong> {paper.journal.statementofscope}
                                </p>
                            )}
                            {paper?.journaldetails && (
                                <p>
                                    <strong>Details:</strong> {paper.journaldetails}
                                </p>
                            )}
                            {paper?.journal?.mediumofpublication && (
                                <p>
                                    <strong>Medium:</strong> {paper.journal.mediumofpublication}
                                </p>
                            )}
                        </section>

                        <section className="publisher-details">
                            <h2>Publisher</h2>
                            <p>
                                <strong>Name:</strong>{" "}
                                {paper?.publisher?.altdisplaytext || paper.publisher.publishername}
                            </p>
                            {paper?.publisher?.website && (
                                <p>
                                    <strong>Website:</strong>{" "}
                                    <Link href={paper.publisher.website} target="_blank">
                                        Visit Publisher
                                    </Link>
                                </p>
                            )}
                            {paper?.publisher?.logo && (
                                <img
                                    src={paper.publisher.logo}
                                    alt={paper.publisher.publishername}
                                    className="publisher-logo"
                                />
                            )}
                        </section>
                        <section className="service-details" >

                            <h5>
                                Website link:  {paper?.publisher?.websitelink}
                            </h5>

                            <h5>
                                Status: {paper?.publisher?.status || "No status"}
                            </h5>

                            <h5>
                                Created at: {formatDate(paper?.created_at)}
                            </h5>

                            <h5>
                                Updated at: {formatDate(paper?.updated_at)}
                            </h5>
                        </section>

                        <section className="category-details">
                            <h2>Categories</h2>
                            <p>
                                {paper?.salevelone?.name}
                                {paper?.saleveltwo && ` > ${paper.saleveltwo.name}`}
                                {paper?.salevelthree && ` > ${paper.salevelthree.name}`}
                            </p>
                            {paper?.salevelone?.icon && (
                                <img
                                    src={paper.salevelone.icon.url}
                                    alt={paper.salevelone.icon.alternativeText || "Category icon"}
                                    className="category-icon"
                                />
                            )}
                        </section>

                        <section className="service-details">
                            <h2>Service Type</h2>
                            <p>
                                <strong>Name:</strong> {paper?.servicetype?.servicename}
                            </p>
                            {paper?.servicetype?.subtitle && (
                                <p>
                                    <strong>Subtitle:</strong> {paper?.servicetype?.subtitle}
                                </p>
                            )}
                            {paper?.servicetype?.description && (
                                <p>
                                    <strong>Description:</strong> {paper?.servicetype?.description}
                                </p>
                            )}
                            {paper?.servicetype?.shortdescription && (
                                <p>
                                    <strong>Short Description:</strong>{" "}
                                    {paper?.servicetype?.shortdescription}
                                </p>
                            )}
                            {paper?.servicetype?.testimonial && (
                                <blockquote>{paper?.servicetype?.testimonial}</blockquote>
                            )}
                            {paper?.servicetype?.icon && (
                                <img
                                    src={paper?.servicetype?.icon?.url}
                                    alt={paper?.servicetype?.icon?.alternativeText || "Service icon"}
                                    className="service-icon"
                                />
                            )}

                            <h5>
                                status:  {paper?.servicetype?.status || "No status"}
                            </h5>
                            <h5>
                                Service type: {paper?.servicetype?.servicetype || "No service type"}
                            </h5>
                            <h5>
                                Tooltip info: {paper?.servicetype?.tooltipinfo || "No tooltip info"}
                            </h5>
                            <h5>
                                B2B Ser: {paper?.servicetype?.b2bser || "No b2bser"}
                            </h5>
                            <h5>
                                Created at: {formatDate(paper?.servicetype?.created_at) || "No created at"}
                            </h5>
                            <h5>
                                Updated at: {formatDate(paper?.servicetype?.updated_at) || "No updated at"}
                            </h5>
                            <h5>
                                Published at: {paper?.servicetype?.published_at || "No published at"}
                            </h5>
                        </section>

                        {paper?.client && !paper?.identityconfidentiality && (
                            <section className="service-details">
                                <h2 className="client-heading">Client Information</h2>

                                <div className="client-main">
                                    {/* Client Image */}
                                    {paper?.client?.clientimage && (
                                        <img
                                            src={paper?.client?.clientimage}
                                            alt={`${paper?.client?.firstname} ${paper?.client?.lastname}`}
                                            className="client-photo"
                                        />
                                    )}

                                    <div className="client-info">
                                        <p><span>Name:</span> {paper?.client?.firstname} {paper?.client?.lastname}</p>

                                        {paper?.client?.designation && (
                                            <p><span>Designation:</span> {paper?.client?.designation}</p>
                                        )}

                                        {paper?.client?.organization && (
                                            <p><span>Organization:</span> {paper?.client?.organization}</p>
                                        )}

                                        {paper?.client?.country && (
                                            <p><span>Country:</span> {paper?.client?.country}</p>
                                        )}
                                    </div>

                                    {/* Organization Logo */}
                                    {paper?.client?.organizationlogo && (
                                        <img
                                            src={paper?.client?.organizationlogo}
                                            alt={`${paper?.client?.organization} logo`}
                                            className="org-logo"
                                        />
                                    )}
                                </div>

                                {/* Testimonial */}
                                {paper?.client?.generaltestimonial && (
                                    <blockquote className="client-testimonial">
                                        “{paper?.client?.generaltestimonial}”
                                    </blockquote>
                                )}

                                {/* Metadata */}
                                <div className="client-meta">
                                    <p><span>Member ID:</span> {paper?.client?.memid || "N/A"}</p>
                                    <p><span>Status:</span> {paper?.client?.status || "N/A"}</p>
                                    <p><span>Created:</span> {paper?.client?.created_at}</p>
                                    <p><span>Updated:</span> {paper?.client?.updated_at}</p>
                                    <p><span>Homepage Visibility:</span> {paper?.client?.showinhomepage ? "Yes" : "No"}</p>
                                    <p><span>Client Image Available:</span> {paper?.client?.clientimage_available ? "Yes" : "No"}</p>
                                </div>
                            </section>
                        )}


                        {paper?.testimonial && (
                            <section className="article-testimonial">
                                <h2>Testimonial</h2>
                                <blockquote>{paper?.testimonial}</blockquote>
                            </section>
                        )}

                        {paper?.tags && paper?.tags?.length > 0 && (
                            <section className="tags">
                                <h2>Tags</h2>
                                <div className="tag-list">
                                    {paper?.tags?.map((tag, index) => (
                                        <span key={index} className="tag">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </section>
                        )}
                    </article>
                ))
            )}
        </div>
    );
};