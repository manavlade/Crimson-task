// interfaces/Article.ts

export interface Icon {
    id: number;
    name: string;
    alternativeText: string | null;
    caption: string | null;
    width: number;
    height: number;
    formats: any | null;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: string | null;
    provider: string;
    provider_metadata: any | null;
    created_at: string;
    updated_at: string;
  }
  
  export interface SalevelOne {
    id: number;
    created_at: string;
    updated_at: string;
    category: string;
    name: string;
    sortorder: number;
    status: boolean;
    slug: string;
    icon: Icon | null;
    banner: string | null;
  }
  
  export interface SalevelTwo {
    id: number;
    name: string;
    salevelone: number;
    created_at: string;
    updated_at: string;
    showinsubjectareapage: boolean;
    status: boolean;
    icon: string | null;
  }
  
  export interface SalevelThree {
    id: number;
    name: string;
    saleveltwo: number;
    created_at: string;
    updated_at: string;
    showinsubjectareapage: boolean;
    status: boolean;
    careers_current_opening: string | null;
    icon: string | null;
  }
  
  export interface Journal {
    id: number;
    title: string;
    articleinfluence: number;
    authorguidelines: string;
    crimsoniscore: number;
    hirschindex: number;
    issn: string;
    impactfactor: number;
    journalabbreviation: string;
    journalreach: string;
    journalwebsiteurl: string;
    scicategory: string;
    scopuscategory: string;
    publishingcompany: string;
    statementofscope: string;
    salevelone: number;
    journalsubjectarea: string;
    created_at: string;
    updated_at: string;
    mediumofpublication: string;
    showinhomepage: boolean;
    displaytitle: string | null;
    journalimage: string | null;
    journallogo: string | null;
  }
  
  export interface Publisher {
    id: number;
    publishername: string;
    status: boolean;
    created_at: string;
    updated_at: string;
    website: string | null;
    websitelink: string | null;
    altdisplaytext: string | null;
    logo: string | null;
  }
  
  export interface ServiceType {
    id: number;
    servicename: string;
    status: boolean;
    servicetype: string;
    published_at: string;
    created_at: string;
    updated_at: string;
    testimonial: string | null;
    subtitle: string | null;
    description: string | null;
    tooltipinfo: string | null;
    b2bser: number;
    shortdescription: string | null;
    icon: Icon | null;
  }
  
  export interface Client {
    id: number;
    memid: string;
    firstname: string;
    lastname: string;
    country: number;
    designation: string | null;
    organization: string | null;
    status: boolean;
    olddatainsertime: string;
    created_at: string;
    updated_at: string;
    generaltestimonial: string | null;
    identityconfidentiality: boolean;
    olddataclientimage: string | null;
    showinhomepage: boolean;
    firstname_regional: string;
    lastname_regional: string;
    clientimage_available: boolean;
    clientimage: string | null;
    organizationlogo: string | null;
  }
  
  export interface Article {
    id: number;
    assignmentno: string;
    salevelone: SalevelOne;
    saleveltwo: SalevelTwo;
    salevelthree: SalevelThree;
    journal: Journal;
    articlelink: string;
    papertitle: string;
    coauthors: string;
    editorcode: string | null;
    identityconfidentiality: boolean;
    status: boolean;
    olddatainserttime: string;
    testimonial: string | null;
    showinhomepage: boolean;
    publisher: Publisher;
    journalaltimpactfactor: number;
    servicetype: ServiceType;
    publishername: string;
    journaldetails: string;
    client: Client;
    published_at: string;
    created_at: string;
    updated_at: string;
    tags: any[];
  }
  