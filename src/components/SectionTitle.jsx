const SectionTitle = ({title, seeAll, classNames}) => {
    return(
        <div className={`flex items-center justify-between ${classNames} capitalize font-bold font-jakarta`}>
            <h3 className="text-2xl">{title}</h3>
            { seeAll &&  <span className="text-sm">see all</span>}
        </div>
    )
}

export default SectionTitle;