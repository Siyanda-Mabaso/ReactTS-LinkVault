import {LinkCard} from "./LinkCard"
import type { LinkProps } from "./LinkProps"

type LinkListProps={
  links:LinkProps[]
}
export const LinkList: React.FC<LinkListProps> = ({links}) => {
   return (
  <>
   
   {links.length > 0 ? (
    links.map((link) =>(
      <LinkCard key={link.id} {...link} />
    ))
  ):(
    <p>No Links</p>
  ) }
  </>
   )
}
       