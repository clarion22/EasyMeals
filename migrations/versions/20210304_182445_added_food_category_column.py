"""added food category column

Revision ID: 72bc36735bc9
Revises: 20d8b6f9fba9
Create Date: 2021-03-04 18:24:45.193571

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '72bc36735bc9'
down_revision = '20d8b6f9fba9'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('recipes', sa.Column('food_category', sa.String(length=100), nullable=False))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('recipes', 'food_category')
    # ### end Alembic commands ###