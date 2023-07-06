import { getPaginationItems } from './PaginationItem';
import ArrowLeft from '../../assets/images/arrow-left.svg'
import ArrowRight from '../../assets/images/arrow-right.svg'
import ArrowLeftDisabled from '../../assets/images/arrow-left-disabled.svg'
import ArrowRightDisabled from '../../assets/images/arrow-right-disabled.svg'
import { 
  PaginationWrapper,
  PaginationContent,
  PageLink,
  PageLinkActive,
  PageLinkDisabled
} from './styles';

export type Props = {
  currentPage: number;
  lastPage: number;
  maxLength: number;
  setCurrentPage: (page: number) => void;
  loading: boolean
};

export default function Pagination({
  currentPage,
  lastPage,
  maxLength,
  setCurrentPage,
  loading,
}: Props) {
  const pageNums = getPaginationItems(currentPage, lastPage, maxLength);

  return (
    <PaginationWrapper>
      <PaginationContent aria-label="Pagination">
        {
          currentPage === 1 || loading ? (
            <PageLinkDisabled onClick={() => setCurrentPage(currentPage - 1)}>
              <img src={ArrowLeftDisabled} alt='arrow-left' />
            </PageLinkDisabled>
          ) : (
            <PageLink onClick={() => setCurrentPage(currentPage - 1)}>
              <img src={ArrowLeft} alt='arrow-left' />
            </PageLink>
          )
        }
        {
          pageNums.map((pageNum, idx) => {
            if(isNaN(pageNum) || loading) {
              return (
                <PageLinkDisabled
                  key={idx}
                  onClick={() => setCurrentPage(pageNum)}
                >
                  {!isNaN(pageNum) ? pageNum : '...'}
                </PageLinkDisabled>
              )
            }
            if(currentPage === pageNum) {
              return (
                <PageLinkActive
                  key={idx}
                  onClick={() => setCurrentPage(pageNum)}
                >
                  {!isNaN(pageNum) ? pageNum : '...'}
                </PageLinkActive>
              )
            }
            return (
              <PageLink
                key={idx}
                onClick={() => setCurrentPage(pageNum)}
              >
                {!isNaN(pageNum) ? pageNum : '...'}
              </PageLink>
            )
          })
        }
        {
          currentPage === lastPage || loading ? (
            <PageLinkDisabled onClick={() => setCurrentPage(currentPage + 1)}>
              <img src={ArrowRightDisabled} alt='arrow-right' />
            </PageLinkDisabled>
          ) : (
            <PageLink onClick={() => setCurrentPage(currentPage + 1)}>
              <img src={ArrowRight} alt='arrow-right' />
            </PageLink>
          )
        }
      </PaginationContent>
    </PaginationWrapper>
  );
}
